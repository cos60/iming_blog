
import { useEffect, useState } from 'react';

import { Divider } from 'antd';
import styles from '../styles/components/category.module.css';
import { getTypeList } from '../config/api/home';


function Category(props) {
    const [ typeList, setTypeList ] = useState([]);
    useEffect(() => {
        getList();
    }, []);

    const getList = () => {
        getTypeList().then(res => {
            setTypeList(res.data.data)
        })
    }
    const typeClickHandle = (value) => {
        props.getType(value)
    }

    return (
        <div>
            <div className={styles.category}>
                <h5>分类</h5>
                <Divider style={{margin: '1rem 0'}}/>
                {
                    typeList.map(item => {
                        return (
                        <li
                            key={item.typeId} onClick={() => { typeClickHandle(item.typeId) }}
                            className={styles.listItem}
                        >
                            { item.typeName }
                            <span
                                className={styles.listCount}
                            >{item.count}</span>    
                        </li>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Category;
