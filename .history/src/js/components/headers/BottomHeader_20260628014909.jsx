// mantine
import { MultiSelect } from '@mantine/core';
import { IconChevronDown} from "@tabler/icons-react"; 
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