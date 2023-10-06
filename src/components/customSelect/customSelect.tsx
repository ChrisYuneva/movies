import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { OptionsType } from '../types/types';

interface CustomSelectProps {
    id: string;
    name: string;
    options: OptionsType[];
    label: string;
    value: string;
    setValue: (event: SelectChangeEvent) => void;
}

function CustomSelect({ id, name, options, label, value, setValue }: CustomSelectProps) {
    return (
        <FormControl sx={{ maxWidth: '350px', width: '100%' }}>
            <InputLabel id="filter">{label}</InputLabel>
            <Select
                labelId="filter"
                id={id}
                name={name}
                value={value}
                label={label}
                onChange={setValue}
            >
                {options.map((el) => (
                    <MenuItem value={el.value} key={el.value}>
                        {el.title}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

export default CustomSelect;
