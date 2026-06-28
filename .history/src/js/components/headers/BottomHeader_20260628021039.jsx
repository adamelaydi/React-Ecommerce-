
    // mantine
    import { MultiSelect } from '@mantine/core';
    import { IconChevronDown} from "@tabler/icons-react";
    import classes from "../../../style/components/Headers/BottomHeaders.module.css";
    // routi
    // styling
    import "../../../style/components/Headers/BottomHeader.css"
import { Link } from 'react-router-dom';
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
                    <nav>
                        <ul>
                            <Link></Link>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }