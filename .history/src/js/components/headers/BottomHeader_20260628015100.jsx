
// mantine
import { MultiSelect } from '@mantine/core';
import { IconChevronDown} from "@tabler/icons-react";
// styling
import "../"
export default function BottomHeader(){
    return(
        <div className="bottom-header">
            <MultiSelect
                placeholder="Browse Categories"
                data={['React', 'Angular', 'Vue', 'Svelte']}
                rightSection={<IconChevronDown className='arrow' size={16} color="black" />}
            />
        </div>
    )
}