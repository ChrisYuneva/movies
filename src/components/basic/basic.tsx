import React, { useEffect } from 'react';
import { FormikProps, useFormik } from 'formik';
import * as yup from 'yup';
import CustomSelect from '../customSelect/customSelect';
import { categories, platforms } from '../types/types';
import { getGamesByFilter } from '../../api/getData';
import { useAppDispatch } from '../../hooks/hooks';
import gamesSlice from '../../store/gamesSlice/gamesSlice';
import CustomSelectChip from '../customSelectChip/customSelectChip';

const BasicScheme = yup.object({
    platform: yup.string(),
    category: yup.string(),
    'sort-by': yup.string()
});

interface BasicFilter {
    platform: string;
    category: string;
    'sort-by': string;
}

function Basic() {
    const dispatch = useAppDispatch();
    const { get } = gamesSlice.actions;

    const formik: FormikProps<BasicFilter> = useFormik({
        initialValues: {
            platform: '',
            category: '',
            'sort-by': ''
        },
        validationSchema: BasicScheme,
        onSubmit: () => getGamesByFilter(formik.values).then((response) => dispatch(get(response)))
    });

    useEffect(() => {
        formik.handleSubmit();
    }, [formik.values.platform, formik.values.category]);

    return (
        <>
            <CustomSelect
                id="platform"
                name="platform"
                options={platforms}
                label={'Platforms'}
                value={formik.values.platform}
                setValue={formik.handleChange}
            />
            <CustomSelectChip
                id="category"
                name="category"
                options={categories}
                label={'Categories'}
                setValue={(value) => formik.setFieldValue('category', value)}
            />
        </>
    );
}

export default Basic;
