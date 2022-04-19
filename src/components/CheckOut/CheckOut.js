import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CheckOut = () => {
    const navigate = useNavigate();
    
    const afterSubmit = e => {
        e.preventDefault();
        navigate(`/thankyou`);
    }
    return (
        <div className='text-center mt-5'>
            <h2 className='text-danger'>CheckOut Information</h2>
            <Form onSubmit={afterSubmit} className='container border border-danger w-50 py-4 px-5 d-flex flex-column rounded-3'>

                <Form.Group className="mb-3">
                    <Form.Label className='fw-bold'>Contact Number</Form.Label>
                    <Form.Control className='border-danger' type="text" placeholder="Number" required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label className='fw-bold'>Address</Form.Label>
                    <Form.Control className='border-danger' type="address" placeholder="Address" required />
                </Form.Group>
                <Button variant="danger" type="submit">
                    Submit
                </Button>
            </Form>

        </div>
    );
};

export default CheckOut;