
    // mantine
    import { MultiSelect } from '@mantine/core';
    import { IconChevronDown} from "@tabler/icons-react";
    import 
   import "../../../style/components/Headers/BottomHeader.css";

    // styling
    import "../../../style/components/Headers/BottomHeader.css"
    export default function BottomHeader(){
        return(
            <div className="bottom-header">
                <div className="container">
                    <MultiSelect
                    className='select'
                        placeholder="Browse Categories"
                        data={['React', 'Angular', 'Vue', 'Svelte']}
                        rightSection={<IconChevronDown className='arrow' size={16} color="black" />}
                        classNames={{
                            dropdown: classes.dropdown,
                            option: classes.option,
                            options: classes.options,
                        }}
                    />
                </div>
            </div>
        )
    }