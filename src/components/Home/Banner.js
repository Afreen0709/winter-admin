import React, { useState } from 'react';
import { Modal, Button, Upload, Space } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useEffect } from 'react';
import { fetchBannerlistData } from "../../reducer/thunks"
import { useDispatch, useSelector } from 'react-redux';
import constant from '../../constant/constant';

const Banners = () => {
    const dispatch = useDispatch();

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        dispatch(fetchBannerlistData())
    }, [])

    const {
        data: Bannerlistres,
        loading: bannerLoading,
        error: bannerError,
    } = useSelector((state) => state.data);

    const showModal = () => {
        setVisible(true);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    const handleOk = () => {
        setVisible(false);
        // Add your submit logic here
    };

    return (
        <div>
            <Button type="primary" onClick={showModal}>
                Open Modal
            </Button>
            <Modal
                title=""
                visible={visible}
                onCancel={handleCancel}
                footer={[
                    <Button key="cancel" onClick={handleCancel}>Cancel</Button>,
                    <Button key="submit" type="primary" onClick={handleOk}>Submit</Button>,
                ]}
            >
                <div>
                    <h1 className="modal-title fs-5"></h1>
                    <Button
                        type="primary"
                        onClick={() => setVisible(false)}
                    >
                        IND
                    </Button>
                    <div className="modal-body">
                        <p className="fs-2 text-center"> Banner</p>
                        <div className="row">
                            {Bannerlistres?.banners.map((item) => (
                                <div className="col px-3">
                                    <img src={`${constant.baseUrl}${item.imageUrl}`} className="img-fluid" alt="Banner" />
                                </div>
                            ))}


                        </div>
                        <div className="row my-3">
                            <Space
                                direction="vertical"
                                style={{
                                    width: '100%',
                                }}
                                size="large"
                            >
                               
                                <Upload
                                    action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                                    listType="picture"
                                    maxCount={3}
                                    multiple
                                >
                                    <Button icon={<UploadOutlined />}>Upload (Max: 3)</Button>
                                </Upload>
                            </Space>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Banners;
