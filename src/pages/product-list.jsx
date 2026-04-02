import React, { Fragment, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import useHostname from '@/Components/Provider/HostnameProvider'
import Layout from '@/Components/Layout/Layout'
import { ReactSVG } from 'react-svg'
import 'flag-icons/css/flag-icons.min.css';
import DataProductListTable from '@/Components/Table/DataProductListTable'
import SecTop from '@/Components/Section/SecTop'
import SelectOption from '@/Components/Seelect/SelectOption'

const ProductList = () => {
    const originalUrl = useHostname();

    const dataTable = [
        {
            id: 1,
            product: {
                img: originalUrl + "/images/pp (2).png", // Replace with actual image path
                title: "Air Jordan 1 Retro High OG 'Black & White",
                subTitle: "Ready to hit the streets with sophistication.",
            },
            category: 'shoes',
            stock: 'available',
            price: '$124',
            qty: '32',
            status: 'Scheduled',
        },
        {
            id: 2,
            product: {
                img: originalUrl + "/images/pp (3).png", // Replace with actual image path
                title: "Nike Dri-FIT Micro Pique 2.0 Polo",
                subTitle: "The best-selling Nike polo just got better.",
            },
            category: 'Fashion',
            stock: 'empty',
            price: '$60',
            qty: '31',
            status: 'Delivered',
        },
        {
            id: 3,
            product: {
                img: originalUrl + "/images/pp (4).png", // Replace with actual image path
                title: "Air Jordan 1 Retro",
                subTitle: "A modern shoe built on the Air Jordan legacy.",
            },
            category: 'Shoes',
            stock: 'available',
            price: '$124',
            qty: '21',
            status: 'Delivered',
        },
        {
            id: 4,
            product: {
                img: originalUrl + "/images/pp (5).png", // Replace with actual image path
                title: "iPhone 13 Pro Max",
                subTitle: "iPhone 13 Pro Max, 128GB",
            },
            category: 'Electronic',
            stock: 'empty',
            price: '$124',
            qty: '121',
            status: 'Cancel',
        },
        {
            id: 5,
            product: {
                img: originalUrl + "/images/pp (6).png", // Replace with actual image path
                title: "2020 Apple iPad Pro 2nd Gen",
                subTitle: "New advancements for upgraded performance",
            },
            category: 'Electronic',
            stock: 'available',
            price: '$124',
            qty: '133',
            status: 'Delivered',
        },
        {
            id: 6,
            product: {
                img: originalUrl + "/images/pp (7).png", // Replace with actual image path
                title: "Apple 2021 iMac with M1 chip",
                subTitle: "An immersive 24-inch 4.5K Retina display ",
            },
            category: 'Electronic',
            stock: 'available',
            price: '$124',
            qty: '233',
            status: 'Delivered',
        },
        {
            id: 7,
            product: {
                img: originalUrl + "/images/pp (1).png", // Replace with actual image path
                title: "MacBook Pro Laptop M2 Pro chip",
                subTitle: "M2 Max takes power and speed to the next level",
            },
            category: 'Electronic',
            stock: 'available',
            price: '$2,500',
            qty: '120',
            status: 'Delivered',
        },
        {
            id: 8,
            product: {
                img: originalUrl + "/images/pp (2).png", // Replace with actual image path
                title: "Air Jordan 1 Retro High OG 'Black & White",
                subTitle: "Ready to hit the streets with sophistication.",
            },
            category: 'shoes',
            stock: 'available',
            price: '$124',
            qty: '32',
            status: 'Scheduled',
        },
        {
            id: 9,
            product: {
                img: originalUrl + "/images/pp (3).png", // Replace with actual image path
                title: "Nike Dri-FIT Micro Pique 2.0 Polo",
                subTitle: "The best-selling Nike polo just got better.",
            },
            category: 'Fashion',
            stock: 'empty',
            price: '$60',
            qty: '31',
            status: 'Delivered',
        },
        {
            id: 10,
            product: {
                img: originalUrl + "/images/pp (4).png", // Replace with actual image path
                title: "Air Jordan 1 Retro",
                subTitle: "A modern shoe built on the Air Jordan legacy.",
            },
            category: 'Shoes',
            stock: 'available',
            price: '$124',
            qty: '21',
            status: 'Delivered',
        },
        {
            id: 11,
            product: {
                img: originalUrl + "/images/pp (5).png", // Replace with actual image path
                title: "iPhone 13 Pro Max",
                subTitle: "iPhone 13 Pro Max, 128GB",
            },
            category: 'Electronic',
            stock: 'empty',
            price: '$124',
            qty: '121',
            status: 'Cancel',
        },
        {
            id: 12,
            product: {
                img: originalUrl + "/images/pp (6).png", // Replace with actual image path
                title: "2020 Apple iPad Pro 2nd Gen",
                subTitle: "New advancements for upgraded performance",
            },
            category: 'Electronic',
            stock: 'available',
            price: '$124',
            qty: '133',
            status: 'Delivered',
        },
        {
            id: 13,
            product: {
                img: originalUrl + "/images/pp (7).png", // Replace with actual image path
                title: "Apple 2021 iMac with M1 chip",
                subTitle: "An immersive 24-inch 4.5K Retina display ",
            },
            category: 'Electronic',
            stock: 'available',
            price: '$124',
            qty: '233',
            status: 'Delivered',
        },
        {
            id: 14,
            product: {
                img: originalUrl + "/images/pp (1).png", // Replace with actual image path
                title: "MacBook Pro Laptop M2 Pro chip",
                subTitle: "M2 Max takes power and speed to the next level",
            },
            category: 'Electronic',
            stock: 'available',
            price: '$2,500',
            qty: '120',
            status: 'Delivered',
        },

    ];

    const [searchTerm, setSearchTerm] = useState('');
    const [Status, setStatus] = useState('');
    const [Category, setCategory] = useState('');
    const [Stock, setStock] = useState('');
    return (
        <Fragment>
            <Layout title='Product List' description='Product List Desc' dashboard={true} >

                <SecTop title='Products' subtitle={"Monitor your store's products to increase your sales."} >
                    <div className="flex items-center gap-3">
                        <a href="#!" className='inline-block px-3 py-2 rounded-[8px] bg-Msurfacesurfacesecondary text-Mmaincolorgreen'>
                            <div className="flex items-center gap-2">
                                <ReactSVG src={originalUrl + "/images/export.svg"} />
                                <p className='font-medium text__14'>Export</p>
                            </div>
                        </a>
                        <a href="#!" className='inline-block px-3 py-2 rounded-[8px] bg-Mmaincolorgreen text-white'>
                            <div className="flex items-center gap-2">
                                <ReactSVG src={originalUrl + "/images/pluss.svg"} />
                                <p className='font-medium text__14'>Add Product</p>
                            </div>
                        </a>
                    </div>
                </SecTop>

                <section className='pt-0 pb-4'>
                    <Container>

                        <div className="flex items-center xl:!flex-nowrap flex-wrap gap-3 relative z-[2]">
                            <div className="flex items-center gap-2 px-2 w-full">
                                <img src={originalUrl + "/images/search.svg"} alt="" />
                                <input value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)} type="text" className='font-medium w-full text__14 placeholder:text-Mtexttextinvert bg-transparent border-none outline-none hover:focus:active:outline-none hover:focus:active:border-none' placeholder='Search order...' />
                            </div>
                            <div className="grid ss:grid-cols-3 gap-3 flex-shrink-0 xl:!w-auto w-full">
                                <SelectOption title={"Status"} value={Status}>
                                    <div className="inline-block w-full cursor-pointer" onClick={() => {
                                        setStatus("Scheduled")
                                    }}>
                                        <p className='font-medium text__16'>Scheduled</p>
                                    </div>
                                    <div className="w-full h-[1px] bg-Mborderborderprimary"></div>
                                    <div className="inline-block w-full cursor-pointer" onClick={() => {
                                        setStatus("Delivered")
                                    }}>
                                        <p className='font-medium text__16'>Delivered</p>
                                    </div>
                                    <div className="w-full h-[1px] bg-Mborderborderprimary"></div>
                                    <div className="inline-block w-full cursor-pointer" onClick={() => {
                                        setStatus("Cancel")
                                    }}>
                                        <p className='font-medium text__16'>Cancel</p>
                                    </div>
                                </SelectOption>
                                <SelectOption title={"Category"} value={Category}>
                                    <div className="inline-block w-full cursor-pointer" onClick={() => setCategory("Shoes")}>
                                        <div className="flex items-center gap-2">
                                            <img src={originalUrl + "/images/Sneaker.svg"} className='w-[20px]' alt="" />
                                            <p className='font-medium text__16'>Shoes</p>
                                        </div>
                                    </div>
                                    <div className="w-full h-[1px] bg-Mborderborderprimary"></div>
                                    <div className="inline-block w-full cursor-pointer" onClick={() => setCategory("Fashion")}>
                                        <div className="flex items-center gap-2">
                                            <img src={originalUrl + "/images/TShirt.svg"} className='w-[20px]' alt="" />
                                            <p className='font-medium text__16'>Fashion</p>
                                        </div>
                                    </div>
                                    <div className="w-full h-[1px] bg-Mborderborderprimary"></div>
                                    <div className="inline-block w-full cursor-pointer" onClick={() => setCategory("Electronic")}>
                                        <div className="flex items-center gap-2">
                                            <img src={originalUrl + "/images/Devices.svg"} className='w-[20px]' alt="" />
                                            <p className='font-medium text__16'>Electronic</p>
                                        </div>
                                    </div>
                                </SelectOption>
                                <SelectOption title={"Stock"} value={Stock}>
                                    <div className="inline-block w-full cursor-pointer" onClick={() => setStock("Available")}>
                                        <p className='font-medium text__16'>Available</p>
                                    </div>
                                    <div className="w-full h-[1px] bg-Mborderborderprimary"></div>
                                    <div className="inline-block w-full cursor-pointer" onClick={() => setStock("Empty")}>
                                        <p className='font-medium text__16'>Empty</p>
                                    </div>
                                </SelectOption>
                            </div>
                        </div>

                        <DataProductListTable Status={Status} Category={Category} Stock={Stock} data={dataTable} searchTerm={searchTerm} paging={true} info={true} />
                    </Container>
                </section>

            </Layout>

        </Fragment>
    )
}

export default ProductList