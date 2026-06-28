// mantine
import { MultiSelect } from '@mantine/core';
export default function BottomHeader(){
    return(
        <div className="bottom-header">
            <MultiSelect
                placeholder="Browse Categories"
                data={['React', 'Angular', 'Vue', 'Svelte']}
            />
        </div>
    )
}