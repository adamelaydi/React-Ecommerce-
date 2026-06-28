
// mantine
import { MultiSelect } from '@mantine/core';
import { IconChevronDown} from "@tabler/icons-react";
// styling
import "../../../style/components/Headers/BottomHeader.css"
export default function BottomHeader(){
    return(
        <div className="bottom-header">
            <div className="container">
            <MultiSelect
                placeholder="Browse Categories"
                data={['React', 'Angular', 'Vue', 'Svelte']}
                rightSection={<IconChevronDown className='arrow' size={16} color="black" />}
            />

            </div>
        </div>
    )
}