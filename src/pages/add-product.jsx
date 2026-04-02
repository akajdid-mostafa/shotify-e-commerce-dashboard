import React, { Fragment, useCallback, useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import useHostname from '@/Components/Provider/HostnameProvider'
import Layout from '@/Components/Layout/Layout'
import SecTop from '@/Components/Section/SecTop'
import { ReactSVG } from 'react-svg'
import { useDropzone } from 'react-dropzone';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic'

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const ProductList = () => {
    const originalUrl = useHostname();

    const [content, setContent] = useState('');

    const handleChange = (value) => {
        setContent(value);
    };

    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline', { 'list': 'ordered' }, { 'list': 'bullet' }, 'link', 'image'],
        ],
    };

    const onDrop = useCallback((acceptedFiles) => {
        // console.log(acceptedFiles);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { 'image/*': [] },
    });

    const [selectedOption, setSelectedOption] = useState('seller');

    const handleOptionChange = (value) => {
        setSelectedOption(value);
    };

    return (
        <Fragment>
            <Layout title='Add Product' description='Add Product Desc' dashboard={true} >

                <SecTop title='Add a New Product' subtitle={"Orders placed across your store."} >
                    <div className="flex items-center gap-3">
                        <a href="#!" className='inline-block px-3 py-2 rounded-[8px] bg-white text-Malertserror'>
                            <p className='font-medium text__14'>Discard</p>
                        </a>
                        <a href="#!" className='inline-block px-3 py-2 rounded-[8px] bg-Msurfacesurfacesecondary text-Mmaincolorgreen'>
                            <p className='font-medium text__14'>Save Draft</p>
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

                        <Row className='gap-y-4'>
                            <Col md={6}>
                                <div className="grid grid-cols-1 gap-3">

                                    <h4 className='font-medium text__18'>Product Description</h4>
                                    <div className="w-full p-3 border !border-Mborderborderprimary rounded-[12px] grid grid-cols-1 gap-3">
                                        <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label className='font-normal text__14 text-[#A3A3A3]'>Product Name</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Product Name" className='font-medium text__14 bg-transparent h-[54px] rounded-[8px] px-3 outline-none shadow-none focus:outline-none focus:shadow-none border-Mborderborderprimary focus:border-Mborderborderprimary focus:bg-transparent' />
                                        </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label className='font-normal text__14 text-[#A3A3A3]'>Description (Optional)</Form.Label>
                                            <ReactQuill
                                                value={content}
                                                onChange={handleChange}
                                                placeholder="Enter Product Description"
                                                modules={modules}
                                                className='textareaStyle flex flex-col-reverse'
                                            />
                                        </Form.Group>
                                    </div>

                                    <h4 className='font-medium text__18'>Category</h4>
                                    <div className="w-full p-3 border !border-Mborderborderprimary rounded-[12px] grid grid-cols-1 gap-3">
                                        <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label className='font-normal text__14 text-[#A3A3A3]'>Product Category</Form.Label>
                                            <Form.Select type="text" placeholder="Enter Product Name" className='font-medium text__14 bg-transparent h-[54px] rounded-[8px] px-3 outline-none shadow-none focus:outline-none focus:shadow-none border-Mborderborderprimary focus:border-Mborderborderprimary focus:bg-transparent'>
                                                <option selected hidden>Select Category</option>
                                                <option value="1">Electronics</option>
                                                <option value="2">Fashion</option>
                                                <option value="3">Shoes</option>
                                            </Form.Select>
                                        </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label className='font-normal text__14 text-[#A3A3A3]'>Collection</Form.Label>
                                            <Form.Select type="text" placeholder="Enter Product Name" className='font-medium text__14 bg-transparent h-[54px] rounded-[8px] px-3 outline-none shadow-none focus:outline-none focus:shadow-none border-Mborderborderprimary focus:border-Mborderborderprimary focus:bg-transparent'>
                                                <option selected hidden>Select Collection</option>
                                                <option value="1">MacBook</option>
                                                <option value="2">Mobile Phone</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </div>

                                    <h4 className='font-medium text__18'>Variant</h4>
                                    <div className="w-full p-3 border !border-Mborderborderprimary rounded-[12px] grid grid-cols-1 gap-3">
                                        <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label className='font-normal text__14 text-[#A3A3A3]'>Option</Form.Label>
                                            <div className="grid grid-cols-4 gap-2">
                                                <Form.Select type="text" placeholder="Enter Product Name" className='font-medium text__14 bg-transparent h-[54px] rounded-[8px] px-3 outline-none shadow-none focus:outline-none focus:shadow-none border-Mborderborderprimary focus:border-Mborderborderprimary focus:bg-transparent'>
                                                    <option selected hidden>Select</option>
                                                    <option value="1">Size</option>
                                                    <option value="2">Color</option>
                                                </Form.Select>
                                                <Form.Control type="text" placeholder="Enter Specification" className='font-medium text__14 bg-transparent h-[54px] rounded-[8px] px-3 outline-none shadow-none focus:outline-none focus:shadow-none border-Mborderborderprimary focus:border-Mborderborderprimary focus:bg-transparent col-span-3' />
                                            </div>
                                        </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label className='font-normal text__14 text-[#A3A3A3]'>Option</Form.Label>
                                            <div className="grid grid-cols-4 gap-2">
                                                <Form.Select type="text" placeholder="Enter Product Name" className='font-medium text__14 bg-transparent h-[54px] rounded-[8px] px-3 outline-none shadow-none focus:outline-none focus:shadow-none border-Mborderborderprimary focus:border-Mborderborderprimary focus:bg-transparent'>
                                                    <option selected hidden>Select</option>
                                                    <option value="1">Size</option>
                                                    <option value="2">Color</option>
                                                </Form.Select>
                                                <Form.Control type="text" placeholder="Enter Specification" className='font-medium text__14 bg-transparent h-[54px] rounded-[8px] px-3 outline-none shadow-none focus:outline-none focus:shadow-none border-Mborderborderprimary focus:border-Mborderborderprimary focus:bg-transparent col-span-3' />
                                            </div>
                                        </Form.Group>
                                        <div className="flex justify-end">
                                            <div className='inline-block px-3 py-2 rounded-[8px] bg-Msurfacesurfacesecondary text-Mmaincolorgreen cursor-pointer'>
                                                <div className="flex items-center gap-2">
                                                    <ReactSVG src={originalUrl + "/images/pluss.svg"} />
                                                    <p className='font-medium text__14'>Add Option</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="grid grid-cols-1 gap-3">
                                    <div className="flex items-center gap-2">
                                        <h4 className='font-medium text__18'>Product Image</h4>
                                        <img src={originalUrl + "/images/Info.svg"} alt="" />
                                    </div>
                                    <div className="w-full p-3 border !border-Mborderborderprimary rounded-[12px] grid xs:grid-cols-2 gap-3">
                                        <div className="w-full min-h-[240px] rounded-[12px] border !border-dashed !border-Msurfacesurfacebrand bg-Msurfacesurfacesecondary flex items-center justify-center text-center"  {...getRootProps()}>
                                            <input {...getInputProps()} />
                                            <div className="flex flex-col items-center justify-center">
                                                <img
                                                    src={originalUrl + "/images/FileImage.svg"}
                                                    alt="Upload Icon"
                                                    className="w-10 h-10 mb-3"
                                                />
                                                {isDragActive ? (
                                                    <p className='text__12 text-Mtexttextinvert'>Drop the files here...</p>
                                                ) : (
                                                    <>
                                                        <p className='text__12 text-Mtexttextinvert mb-3'>Drag and drop your image <br className='xl:block hidden' /> here...</p>
                                                        <p className="text-Mtexttextbrand font-medium text__14 mt-2">Click to upload</p>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-3">
                                            <img src={originalUrl + "/images/up (2).png"} className='w-full object-cover rounded-[6px]' alt="" />
                                            <img src={originalUrl + "/images/up (3).png"} className='w-full object-cover rounded-[6px]' alt="" />
                                            <img src={originalUrl + "/images/up (4).png"} className='w-full object-cover rounded-[6px]' alt="" />
                                            <img src={originalUrl + "/images/up (1).png"} className='w-full object-cover rounded-[6px]' alt="" />
                                        </div>
                                    </div>


                                    <h4 className='font-medium text__18'>Pricing</h4>
                                    <div className="w-full p-3 border !border-Mborderborderprimary rounded-[12px] grid grid-cols-1 gap-3">
                                        <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label className='font-normal text__14 text-[#A3A3A3]'>Base Price</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Base Price" className='font-medium text__14 bg-transparent h-[54px] rounded-[8px] px-3 outline-none shadow-none focus:outline-none focus:shadow-none border-Mborderborderprimary focus:border-Mborderborderprimary focus:bg-transparent' />
                                        </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label className='font-normal text__14 text-[#A3A3A3]'>Discount Price</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Discount Price" className='font-medium text__14 bg-transparent h-[54px] rounded-[8px] px-3 outline-none shadow-none focus:outline-none focus:shadow-none border-Mborderborderprimary focus:border-Mborderborderprimary focus:bg-transparent' />
                                        </Form.Group>
                                    </div>


                                    <h4 className='font-medium text__18'>Shipping and Delivery</h4>
                                    <div className="w-full p-3 border !border-Mborderborderprimary rounded-[12px] grid grid-cols-1 gap-3">
                                        <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label className='font-normal text__14 text-[#A3A3A3]'>Item Weight</Form.Label>
                                            <div className="grid grid-cols-4 gap-2">
                                                <Form.Control type="text" placeholder="Enter Item Weight" className='font-medium text__14 bg-transparent h-[54px] rounded-[8px] px-3 outline-none shadow-none focus:outline-none focus:shadow-none border-Mborderborderprimary focus:border-Mborderborderprimary focus:bg-transparent col-span-3' />
                                                <Form.Select type="text" placeholder="Enter Product Name" className='font-medium text__14 bg-transparent h-[54px] rounded-[8px] px-3 outline-none shadow-none focus:outline-none focus:shadow-none border-Mborderborderprimary focus:border-Mborderborderprimary focus:bg-transparent'>
                                                    <option selected hidden>Select</option>
                                                    {
                                                        ['kg', 'g', 'pcs', 'ton', 'liter', 'ml'].map((obj) => {
                                                            return <option value="1">{obj}</option>
                                                        })
                                                    }
                                                </Form.Select>
                                            </div>
                                            <p className='text__14 mt-2'>*Package size (The package you use to ship your product)</p>
                                        </Form.Group>

                                        <h4 className='font-medium text__18 mt-3'>Shipping Type</h4>

                                        <label className="flex items-start cursor-pointer gap-3">
                                            <input
                                                type="radio"
                                                name="fulfillment"
                                                value="seller"
                                                checked={selectedOption === 'seller'}
                                                onChange={() => handleOptionChange('seller')}
                                                className="hidden"
                                            />
                                            <div className={"w-[24px] h-[24px] rounded-fullborder  flex items-center justify-center border flex-shrink-0 rounded-full " + (selectedOption === 'seller' ? "!border-Mmaincolorgreen" : "!border-Mgray400")} >
                                                {
                                                    selectedOption === 'seller' ? <div className="w-[16px] h-[16px] rounded-full bg-Mmaincolorgreen"></div> : ""
                                                }
                                            </div>
                                            <div>
                                                <h3 className="font-medium text__16 mb-2">Fulfilled by Seller</h3>
                                                <p className="text__14">
                                                    You'll be responsible for product delivery. Any damage or delay during shipping may cost you a Damage fee.
                                                </p>
                                            </div>
                                        </label>

                                        {/* Opsi kedua */}
                                        <label className="flex items-start cursor-pointer gap-3">
                                            <input
                                                type="radio"
                                                name="fulfillment"
                                                value="merchant"
                                                checked={selectedOption === 'merchant'}
                                                onChange={() => handleOptionChange('merchant')}
                                                className="hidden"
                                            />
                                            <div className={"w-[24px] h-[24px] rounded-fullborder  flex items-center justify-center border flex-shrink-0 rounded-full " + (selectedOption === 'merchant' ? "!border-Mmaincolorgreen" : "!border-Mgray400")} >
                                                {
                                                    selectedOption === 'merchant' ? <div className="w-[16px] h-[16px] rounded-full bg-Mmaincolorgreen"></div> : ""
                                                }
                                            </div>
                                            <div>
                                                <h3 className="font-medium text__16 mb-2">Fulfilled by Merchant</h3>
                                                <p className="text__14">
                                                    The merchant will handle product delivery. Any damage or delay during shipping is their responsibility.
                                                </p>
                                            </div>
                                        </label>
                                    </div>

                                </div>
                            </Col>
                        </Row>

                    </Container>
                </section>

            </Layout>

        </Fragment>
    )
}

export default ProductList