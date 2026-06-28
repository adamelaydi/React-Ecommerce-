// mantine
import { MultiSelect } from '@mantine/core';
import 
export default function BottomHeader(){
    return(
        <div className="bottom-header">
            <MultiSelect
                placeholder="Browse Categories"
                data={['React', 'Angular', 'Vue', 'Svelte']}
                 rightSection={<IconChevronDown size={18} color="red" />}
            />
        </div>
    )
}