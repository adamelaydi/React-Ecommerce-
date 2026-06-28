
    
    // mantine
    import { MultiSelect } from '@mantine/core';
    import { IconChevronDown} from "@tabler/icons-react";
    import classes from "../../../style/components/Headers/BottomHeaders.module.css";
    // routing
    import { Link } from 'react-router-dom';

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
                    <nav>
                        <ul>
                            <Link to={"/"} > home</Link>
                            <Link to={"/about"} > about</Link>
                            <Link to={"/accessories"} > accessories</Link>
                            <Link to={"/blog"} > Blog</Link>
                            <Link to={"/ "} > home</Link>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }