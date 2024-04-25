import {Form, Input,InputNumber, Button,Select,Row,Col} from 'antd';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export default function NewReview() {
    const { state } = useLocation();
    const navigate = useNavigate();

    const { Option } = Select;//used in dropdown menu
    const { TextArea } = Input;




    const onFinish = (values) => {
        console.log('Success:', values);
       
        
        //edit changes in database a
        //redirect home and refresh window

        //send form data to server
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        };
        
        fetch(`http://localhost:5000/api/game/reviews/new`, requestOptions)
            .then(response => response.json())
            .then(data => console.log('Review Successfully created'));
    
    
        //on row submit navigate to home
        navigate(`/` );
        window.location.reload();
    };
    
    const onFinishFailed = (errorInfo) => {
        //console.log(state.record.id);
        //console.log(state.record);
        console.log('Failed:', errorInfo);
    };


    return (
        <>
        <Row>
            <Col span={24}>
                <h1 style={{textAlign:'center'}}>Add New Review</h1>
            </Col>

        </Row>
        <Row>
            <Col span={16} offset={5}>
            <Form
                name="basic"
                labelCol={{
                span: 8,
                }}
                wrapperCol={{
                span: 16,
                }}
                style={{
                maxWidth: 600,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                
                
            >
                <Form.Item
                label="App ID"
                name="app_id"
                rules={[
                    {
                    required: true,
                    message: 'Please input app ID!',
                    },
                ]}
                >
                <InputNumber 
                    min='1'
                    />
                </Form.Item>

                <Form.Item
                label="App Name"
                name="app_name"
                initialValue={state.record.name}
                
                
                rules={[
                    {
                    required: true,
                    message: 'Please input game name!',
                    },
                ]}
                >
                <Input 
                    disabled={true}/>
                </Form.Item>
                <Form.Item
                label="Review Sentiment"
                name="review_score"
                rules={[
                    {
                    required: true,
                    message: 'Please choose one of the options!',
                    },
                ]}
                >
                <Select
                    placeholder="Select a option and change input text above"
                    //onChange={onGenderChange}
                    //allowClear
                    >
                    <Option value="1">Would recommend the game</Option>
                    <Option value="-1">Would NOT recommend the game</Option>
                   
                </Select>
                </Form.Item>

                <Form.Item
                
                label="Review vote"
                name="review_votes"
                rules={[
                    {
                    required: true,
                    message: 'Please choose one of the options!',
                    },
                ]}
                >
                <Select
                    placeholder="Select a option and change input text above"
                    //onChange={onGenderChange}
                    //allowClear
                    >
                    <Option value="1">Game was recommended by another user</Option>
                    <Option value="0">Game was NOT recommended by another user</Option>
                </Select>
                </Form.Item>

                <Form.Item
                label="Review"
                name="review_text"
                rules={[
                    {
                    required: true,
                    message: 'Please input review!',
                    },
                ]}
                >
                <TextArea rows={6} />
                </Form.Item>

                

                <Form.Item
                style={{textAlign:'center'}}
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
                >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                </Form.Item>
            </Form>

            </Col>
        </Row>
        </>
    );
}