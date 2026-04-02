import React, { Fragment, useCallback, useState } from 'react'
import { Col, Container, Form, Modal, Row } from 'react-bootstrap'
import useHostname from '../Provider/HostnameProvider';
import { useDropzone } from 'react-dropzone';
import dynamic from 'next/dynamic';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';

const ModalAddCategory = ({ onHideClick, title, ...props }) => {
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

    return (
        <Fragment>
            {/* Modal */}
            <Modal {...props}>
                <Modal.Body>
                    <div className="border-b !border-Mborderborderprimary p-3">
                        <Container>
                            <div className="flex items-center justify-between py-2">
                                <h4 className='font-semibold text__20'>{title}</h4>
                                <img className='cursor-pointer' onClick={onHideClick} src={originalUrl + "/images/asdas.svg"} alt="" />
                            </div>
                        </Container>
                    </div>
                    <div className="p-4">
                        <div className="w-full p-3 border !border-Mborderborderprimary rounded-[12px] grid grid-cols-1 gap-3">
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
                                            <p className='text__12 text-Mtexttextinvert mb-3'>Drag and drop your image <br /> here...</p>
                                            <p className="text-Mtexttextbrand font-medium text__14 mt-2">Click to upload</p>
                                        </>
                                    )}
                                </div>
                            </div>

                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label className='font-normal text__14 text-[#A3A3A3]'>Product Name</Form.Label>
                                <Form.Control type="email" placeholder="Enter Product Name" className='font-medium text__14 bg-transparent h-[54px] rounded-[8px] px-3 outline-none shadow-none focus:outline-none focus:shadow-none border-Mborderborderprimary focus:border-Mborderborderprimary focus:bg-transparent' />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label className='font-normal text__14 text-[#A3A3A3]'>Description (Optional)</Form.Label>
                                <ReactQuill
                                    value={content}
                                    onChange={handleChange}
                                    placeholder="Enter Description"
                                    modules={modules}
                                    className='textareaStyle hCategory flex flex-col-reverse'
                                />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label className='font-normal text__14 text-[#A3A3A3]'>Parent Category</Form.Label>
                                <Form.Select type="text" placeholder="Enter Product Name" className='font-medium text__14 bg-transparent h-[54px] rounded-[8px] px-3 outline-none shadow-none focus:outline-none focus:shadow-none border-Mborderborderprimary focus:border-Mborderborderprimary focus:bg-transparent'>
                                    <option selected hidden>Select Parent Category</option>
                                    <option value="1">Electronics</option>
                                    <option value="2">Fashion</option>
                                    <option value="3">Shoes</option>
                                </Form.Select>
                            </Form.Group>

                            <div className="mt-4 flex items-center gap-2 justify-end">
                                <div onClick={onHideClick} className='cursor-pointer inline-block px-3 py-2 rounded-[8px] bg-white text-Malertserror'>
                                    <p className='font-medium text__14'>Discard</p>
                                </div>
                                <div onClick={onHideClick} className='cursor-pointer inline-block px-3 py-2 rounded-[8px] bg-Mmaincolorgreen text-white'>
                                    <p className='font-medium text__14'>Add Category</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </Modal.Body>
            </Modal>
            {/* Modal */}
        </Fragment>
    )
}

export default ModalAddCategory
