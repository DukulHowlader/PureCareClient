import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './SideMenu.css';

const SideMenu = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(response => response.json())
            .then(data => {
                setCategories(data);
            })
    }, []);

    return (
        <div>
            {
                categories.map(Category => <div className="sideMenuDiv" key={Category._id}><h6 className="px-4 py-2 text-uppercase">{Category.category}</h6>
                    <div className=" my-3">
                        {(Category.subCategories).map(subCategory => <li key={subCategory} className="sideMenuLi px-5 py-3 "><Link to={`/category/${subCategory}`} className="sideMenuLink"><FontAwesomeIcon icon={faChevronRight} /> {subCategory}</Link></li> )}
                    </div>

                </div>)
            }
        </div>
    );
};

export default SideMenu;