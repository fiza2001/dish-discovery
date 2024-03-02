import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const contentful = require('contentful-management')

const client = contentful.createClient({
  accessToken: 'CFPAT-DngYl9OCOyzx63dS07aiFrRegT5DcJhUjjjl4dU5eiE'
})

// Create entry
client.getSpace('8fhkkx1egwnn')
.then((space) => space.getEnvironment('master'))
.then((environment) => environment.createEntry('dish', {
  fields: {
    title: {
      'en-US': 'Shawarma'
    },
    category: {
        'en-US': 'french'
    },
    slug: {
        'en-US': 'shawarma'
    }
  }
}))
.then((entry) => entry.publish())
.catch(console.error);

const FormComponent = () => {
  const initialValues = {
    name: '',
    aboutMyself: '',
    title: '',
    description: '',
    uploadImage: '',
    ingredients: '',
    preparation: '',
    category: '',
    profilePhoto: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    aboutMyself: Yup.string().required('About myself is required'),
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    uploadImage: Yup.mixed().required('Image is required'),
    ingredients: Yup.string().required('Ingredients are required'),
    preparation: Yup.string().required('Preparation is required'),
    category: Yup.string().required('Category is required'),
    profilePhoto: Yup.mixed().required('Profile photo is required'),
  });
  
  
  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div style={{backgroundColor: 'paleturquoise', paddingTop: '4%', paddingBottom: '3%'}}>
        <center><h2>Create Recipe</h2></center>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className='create-main'>
          {/* <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <Field type="text" id="name" name="name" className="form-control" />
            <ErrorMessage name="name" component="div" className="text-danger" />
          </div>
          <div className="mb-3">
            <label htmlFor="aboutMyself" className="form-label">Tell us about yourself</label>
            <Field as="textarea" id="aboutMyself" name="aboutMyself" className="form-control" />
            <ErrorMessage name="aboutMyself" component="div" className="text-danger" />
          </div>
          <div className="mb-3">
            <label htmlFor="profilePhoto" className="form-label">Upload Profile Photo</label>
            <Field type="file" id="profilePhoto" name="profilePhoto" className="form-control" />
            <ErrorMessage name="profilePhoto" component="div" className="text-danger" />
          </div> */}
          <div className="mb-3">
            <label htmlFor="category" className="form-label">Choose Category</label>
            <Field as="select" id="category" name="category" className="form-control">
              <option value="">Select a category</option>
              <option value="category1">American</option>
              <option value="category2">French</option>
              <option value="category3">Indian</option>
            </Field>
            <ErrorMessage name="category" component="div" className="text-danger" />
          </div>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Name of the Dish</label>
            <Field type="text" id="title" name="title" className="form-control" />
            <ErrorMessage name="title" component="div" className="text-danger" />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">About the Dish</label>
            <Field as="textarea" id="description" name="description" className="form-control" />
            <ErrorMessage name="description" component="div" className="text-danger" />
          </div>
          <div className="mb-3">
            <label htmlFor="uploadImage" className="form-label">Upload Images</label>
            <Field type="file" id="uploadImage" name="uploadImage" className="form-control" />
            <ErrorMessage name="uploadImage" component="div" className="text-danger" />
          </div>
          <div className="mb-3">
            <label htmlFor="ingredients" className="form-label">Ingredients</label>
            <Field as="textarea" id="ingredients" name="ingredients" className="form-control" />
            <ErrorMessage name="ingredients" component="div" className="text-danger" />
          </div>
          <div className="mb-3">
            <label htmlFor="preparation" className="form-label">Instructions</label>
            <Field as="textarea" id="preparation" name="preparation" className="form-control" />
            <ErrorMessage name="preparation" component="div" className="text-danger" />
          </div>
          <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
            Post
          </button>
        </Form>
      )}
    </Formik>
   </div>
  );
};

export default FormComponent;
