import React, {Component} from 'react';
import {Row, Col} from 'antd';
import '../css/Photo.css'
import Gallery3d from '../component/photowall/Gallery3d'

class Photo extends Component {
    render() {
        return (
            <Row className={'about_layout'}>
                <Col span={24} className={'about_layout'}><Gallery3d /></Col>
            </Row>
        );
    }
}

export default Photo;
