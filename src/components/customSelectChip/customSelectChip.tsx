import {
    Box,
    Chip,
    FormControl,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
    SelectChangeEvent
} from '@mui/material';
import { OptionsType } from '../types/types';
import { useEffect, useState } from 'react';

interface CustomSelectChipPropsType {
    id: string;
    name: string;
    options: OptionsType[];
    label: string;
    setValue: (select: string) => void;
}

function CustomSelectChip({ id, name, label, options, setValue }: CustomSelectChipPropsType) {
    const [selectOptions, setSelectOptions] = useState<string[]>([]);

    function handleChange(event: SelectChangeEvent<typeof selectOptions>) {
        setSelectOptions(
            typeof event.target.value === 'string'
                ? event.target.value.split(',')
                : event.target.value
        );
    }

    useEffect(() => {
        setValue(selectOptions.join('.'));
    }, [selectOptions]);

    return (
        <>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-chip-label">{label}</InputLabel>
                <Select
                    labelId="demo-multiple-chip-label"
                    id={id}
                    name={name}
                    multiple
                    value={selectOptions}
                    onChange={handleChange}
                    label={label}
                    input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                    renderValue={(options) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {options.map((el) => (
                                <Chip key={el} label={el} />
                            ))}
                        </Box>
                    )}
                >
                    {options.map((el) => (
                        <MenuItem key={el.value} value={el.value}>
                            {el.title}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </>
    );
}

export default CustomSelectChip;
