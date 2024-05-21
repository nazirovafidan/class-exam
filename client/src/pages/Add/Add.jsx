import { useFormik} from "formik";
import { post } from "../../services/requests";
import { endpoints } from "../../services/constants";
import { useNavigate } from "react-router-dom";
import { validationSchema } from "../../validations/add.validation";

const Add = () => {
    const navigate=useNavigate()
    const formik = useFormik({
      initialValues: {
        image: "",
        price: "",
        title: "",
        description: "",
      },validationSchema:validationSchema,
      onSubmit: async (values, actions) => {
        await post(endpoints.foods, values);
        actions.resetForm();
        navigate('/client-login');
      },
    });
    return (
      <div>
        <form onSubmit={formik.handleSubmit}>
  
          <label htmlFor="image">Image url:</label>
          <input
            onChange={formik.handleChange}
            value={formik.values.fullname}
            id="image"
            name="image"
            type="text"
          />
  
          <label htmlFor="price">Price:</label>
          <input
            onChange={formik.handleChange}
            value={formik.values.username}
            id="price"
            name="price"
            type="text"
          />
  
          <label htmlFor="title">Email:</label>
          <input
            onChange={formik.handleChange}
            value={formik.values.email}
            name="title"
            id="title"
            type="text"
          />
  
          <label htmlFor="description">Password:</label>
          <input
            onChange={formik.handleChange}
            value={formik.values.password}
            id="description"
            name="description"
            type="text"
          />
  
          <button type="submit">
            Add
          </button>
        </form>
      </div>
    );
  };
  
  export default Add;
