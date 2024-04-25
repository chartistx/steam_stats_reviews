import { useLocation } from 'react-router-dom';
import {Form, Input,InputNumber, Button,Select} from 'antd';
import { useNavigate } from "react-router-dom";
//import {Option} from 'antd/es/mentions';

export default function EditGameReview() {
    const { state } = useLocation();
    const navigate = useNavigate();

    const { Option } = Select;//used in dropdown menu
    const { TextArea } = Input;

    //check if user was directed from a game card or used only link
    // if(state==null){
    //     //go home if link was used
    //     navigate(`/`);
    // }
    
    //console.log(state.record.id);
    


    const onFinish = (values) => {
        //console.log('Success:', state.record.id);
        
        //edit changes in database a
        //redirect home and refresh window

        //send form data to server
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        };
        
        fetch(`http://localhost:5000/api/game/reviews/description/${state.record.id}`, requestOptions)
            .then(response => response.json())
            .then(data => console.log('Review Successfully Edited'));
    
    
        //on row submit navigate to home
        navigate(`/games/review/${state.record.id}`, { state: { record: values } });
        window.location.reload();
    };
    
    const onFinishFailed = (errorInfo) => {
        //console.log(state.record);
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            <h1>EDIT GAME</h1>
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
                initialValues={state.record}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                
                <Form.Item
                label="App Name"
                name="app_name"
                rules={[
                    {
                    required: true,
                    message: 'Please input game name!',
                    },
                ]}
                >
                <Input />
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

            
            
        </div>
    );
}