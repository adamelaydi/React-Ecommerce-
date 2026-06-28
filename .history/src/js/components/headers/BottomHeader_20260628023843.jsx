
    
    // mantine
    import { MultiSelect } from '@mantine/core';
    import { IconChevronDown} from "@tabler/icons-react";
    import classes from "../../../style/components/Headers/BottomHeaders.module.css";
    // routing
    import { Link } from 'react-router-dom';
    // fontawsome 
    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
    import { faRightToBracket,faUser } from "@fortawesome/free-solid-svg-icons";

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
                            <Link className='link active' to={"/"} > home</Link>
                            <Link className='link'  to={"/about"} > about</Link>
                            <Link  className='link' to={"/accessories"} > accessories</Link>
                            <Link className='link'  to={"/blog"} > Blog</Link>
                            <Link  className='link' to={"/contact"} > contact</Link>
                        </ul>
                    <div className="auth-btns">
                        <button><FontAwesomeIcon icon={faRightToBracket} /></button>
                        <button><FontAwesomeIcon icon={faUser} /></button>
                    </div>
                    </nav>
                </div>
            </div>
        )
    }