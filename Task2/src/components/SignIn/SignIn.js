import { Button, Checkbox, TextField, Link, FormControlLabel, Grid, Card, Typography } from '@material-ui/core';
import useStyles from "./useStyles"

const SignIn = () => {


    const { mainGridContainer, card, gridItem, title, smallText, link, button, checkbox, checkboxLabel, checked, label, signUpInstead } = useStyles()


    return (
        <>
            <Typography className={title}>Stackfindover</Typography>

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
                        <TextField fullWidth name="email" placeholder="Enter your email" variant="outlined" size="small" />
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
                        <TextField fullWidth name="password" placeholder="Enter your password" variant="outlined" size="small" />
                    </Grid>

                    <Grid item class={gridItem}>
                        <FormControlLabel
                            control={<Checkbox color="primary" className={checkbox} classes={{ root: checkbox, checked: checked }} />}
                            classes={{ root: label }}
                            label={<Typography className={checkboxLabel}>Stay signed in for a week</Typography>}
                        />
                    </Grid>
                    <Grid item class={gridItem}>
                        <Button className={button} variant="contained" color="primary">
                            Continue
                        </Button>
                    </Grid>
                    <Grid item className={gridItem}>
                        <Grid container justifyContent="center">
                            <Grid item>
                                <Link href="https://www.google.com/maps" className={link} underline="none">Use single sign-on (Google) instead</Link>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>

            </Card>
            <Grid container className={signUpInstead}justifyContent="center">
                <Typography className={smallText}>Don't have an account? <Link className={link} underline="none">Sign up</Link></Typography>
            </Grid>
        </>
    )
}

export default SignIn