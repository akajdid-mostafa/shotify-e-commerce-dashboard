import React, { Fragment, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import useHostname from '@/Components/Provider/HostnameProvider'
import Layout from '@/Components/Layout/Layout'
import { ReactSVG } from 'react-svg'
import 'flag-icons/css/flag-icons.min.css';
import SecTop from '@/Components/Section/SecTop'
import DataCategoryTable from '@/Components/Table/DataCategoryTable'
import ModalAddCategory from '@/Components/Modal/ModalAddCategory'

const Category = () => {
    const originalUrl = useHostname();

    const dataTable = [
        {
            id: 1,
            product: {
                img: originalUrl + "/images/cat (1).png", // Replace with actual image path
                title: "Travel",
                subTitle: "Choose from wide range of travel accessories from popular brands",
            },
            total_product: '1.186',
            total_earning: '$3,312.99',
        },
        {
            id: 2,
            product: {
                img: originalUrl + "/images/pp (4).png", // Replace with actual image path
                title: "Shoes",
                subTitle: "Explore the latest shoes from Top brands",
            },
            total_product: '1.386',
            total_earning: '$3,283.99',
        },
        {
            id: 3,
            product: {
                img: originalUrl + "/images/pp (5).png", // Replace with actual image path
                title: "Smart Phone",
                subTitle: "Choose from wide range of smartphones from popular brands",
            },
            total_product: '2.344',
            total_earning: '$3,343.99',
        },
        {
            id: 4,
            product: {
                img: originalUrl + "/images/cat (2).png", // Replace with actual image path
                title: "Home Decor",
                subTitle: "Choose from wide range of home decor from popular brands",
            },
            total_product: '4.378',
            total_earning: '$7,912.99',
        },
        {
            id: 5,
            product: {
                img: originalUrl + "/images/cat (3).png", // Replace with actual image path
                title: "Games",
                subTitle: "Dive into world of Virtual Reality with latest games",
            },
            total_product: '1.982',
            total_earning: '$5,912.99',
        },
    ];

    const [searchTerm, setSearchTerm] = useState('');

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Fragment>
            <Layout title='Category' description='Category Desc' dashboard={true} >

                <ModalAddCategory title={"Add Category"} onHideClick={handleClose} show={show} onHide={handleClose} dialogClassName="md:mr-0 warpContent custom-min-h"  size="md" />

                <SecTop title='Category List' subtitle={"Track orders list across your store."} >
                    <div className="flex items-center gap-3">
                        <div onClick={handleShow} className='cursor-pointer inline-block px-3 py-2 rounded-[8px] bg-Mmaincolorgreen text-white'>
                            <div className="flex items-center gap-2">
                                <ReactSVG src={originalUrl + "/images/pluss.svg"} />
                                <p className='font-medium text__14'>Add Category</p>
                            </div>
                        </div>
                    </div>
                </SecTop>

                <section className='pt-0 pb-4'>
                    <Container>

                        <div className="flex items-center gap-2 px-2 mb-4 w-full">
                            <img src={originalUrl + "/images/search.svg"} alt="" />
                            <input value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)} type="text" className='font-medium w-full text__14 placeholder:text-Mtexttextinvert bg-transparent border-none outline-none hover:focus:active:outline-none hover:focus:active:border-none' placeholder='Search order...' />
                        </div>

                        <DataCategoryTable data={dataTable} searchTerm={searchTerm} paging={true} info={true} />
                    </Container>
                </section>

            </Layout>

        </Fragment>
    )
}

export default Category