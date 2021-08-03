import { Button, Checkbox, TextField, Link, FormControlLabel, Grid, Card, Typography } from '@material-ui/core';
import useStyles from "./useStyles"
import { useFormik } from 'formik'
import * as Yup from "yup"

const SignIn = () => {

    const { mainGridContainer, card, gridItem, title, smallText, link, button, input, checkbox, checkboxLabel, checked, label, signUpInstead } = useStyles()


    const initialValues = {
        email: '',
        password: ''
    }

    const onSubmit = values => {
        console.log(values)
    }

    const validationSchema = Yup.object({
        email: Yup.string().email('*Invalid email format').required('*Required'),
        password: Yup.string().min(8, '*At least 8 characters').max(20, '*At most 20 characters').required('*Required'),
    })

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })

    console.log('form values', formik.values)


    return (
        <>

            <Typography className={title}>Stackfindover</Typography>

            <form onSubmit={formik.handleSubmit}>

                <Card variant="outlined" className={card}>

                    <Grid container className={mainGridContainer} direction="column" justifyContent="space-between" alignItems="flex-start" >

                        <Grid item class={gridItem}>
                            <Typography>Sign in to your account</Typography>
                        </Grid>

                        <Grid item className={gridItem}>

                            <Grid container direction="row" justifyContent="flex-start" alignItems="center">
                                <Grid item>
                                    <Typography className={smallText}>Email</Typography>
                                </Grid>
                            </Grid>

                            <TextField fullWidth onChange={formik.handleChange}
                                className={input}
                                value={formik.values.email}
                                onBlur={formik.handleBlur}
                                helperText={
                                    formik.errors.email &&
                                    formik.touched.email &&
                                    String(formik.errors.email)
                                }
                                error={Boolean(formik.errors.email && formik.touched.email)}
                                name="email" placeholder="Enter your email" variant="outlined" size="small" />

                        </Grid>

                        <Grid item className={gridItem}>

                            <Grid container direction="row" justifyContent="space-between" alignItems="center">
                                <Grid item>
                                    <Typography className={smallText}>Password</Typography>
                                </Grid>
                                <Grid item className={link}>
                                    <Link href="https://www.google.com" target="_blank" className={link} underline="none">Forgot your password?</Link>
                                </Grid>
                            </Grid>

                            <TextField
                                fullWidth onChange={formik.handleChange}
                                value={formik.values.password}
                                onBlur={formik.handleBlur}
                                className={input}
                                helperText={
                                    formik.errors.password &&
                                    formik.touched.password &&
                                    String(formik.errors.password)
                                }
                                error={Boolean(formik.errors.password && formik.touched.password)}
                                name="password" placeholder="Enter your password" variant="outlined" 
                                size="small" type='password' />

                        </Grid>

                        <Grid item class={gridItem}>
                            <FormControlLabel
                                control={<Checkbox color="primary" className={checkbox} classes={{ root: checkbox, checked: checked }} />}
                                classes={{ root: label }}
                                label={<Typography className={checkboxLabel}>Stay signed in for a week</Typography>}
                            />
                        </Grid>

                        <Grid item class={gridItem}>
                            <Button className={button} type='submit' variant="contained" color="primary">
                                Continue
                            </Button>
                        </Grid>

                        <Grid item className={gridItem}>
                            <Grid container justifyContent="center">
                                <Grid item>
                                    <Link href="https://www.google.com/maps" target="_blank" className={link} underline="none">Use single sign-on (Google) instead</Link>
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>

                </Card>
            </form>
            <Grid container className={signUpInstead} justifyContent="center">
                <Typography className={smallText}>Don't have an account? <Link href="https://www.facebook.com" className={link} underline="none">Sign up</Link></Typography>
            </Grid>

        </>
    )
}

export default SignIn