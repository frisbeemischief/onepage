import React from 'react'
import Grid  from '@mui/material/Grid'
import { FC } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const gridStyleObj = {
  bgcolor: '#000000',
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  width: '100vw',
  alignContent: 'center',
  alignItems: 'center',
  justifyContent: 'center',
}

const linkString = 'The button below will redirect to a CashApp account for a trusted friend. I appreciate you all!'

export const App: FC = () => {
  const url = 'http://www.google.com'
  return (
    <Grid container sx={gridStyleObj}>
      <Grid item sx={{
        padding: '20rem'
      }} >
        <Typography align="center" sx={{
          color: "#FFFFFF",
          lineHeight: 2,
        }}>{CTA}</Typography>
        <Grid item sx={{ marginTop: '2vh'}}>
          <Typography align="center" sx={{
          color: "#FFFFFF",
        }}
          >
            {linkString}
          </Typography>
          <Grid container sx={{
            marginTop: '5vh',
            justifyContent: 'space-around'
            }}>
            <Button color="secondary" onClick={() => window.location.href = url} variant="contained" size="large">Thank you!</Button>
            </Grid>
            </Grid>
          </Grid>
    </Grid>
  );
};

export default App;


const CTA = `After a week-long stay at an in-patient mental health facility due to suicidal and self-harming ideation triggered by persistent harassment from a former partner, I find myself compelled to share the deeply distressing journey I've endured.

From 2016 to 2018, I navigated a verbally, emotionally/mentally, physically, and sexually abusive relationship. When I bravely spoke out during the Me Too Movement of 2020, my abuser weaponized the legal system, using baseless claims of "Defamation" and "Wire Tapping" to silence me. I had recorded videos with his knowledge as evidence in case of potential police involvement.

The initial notice of the lawsuit arrived amid the height of the Covid-19 pandemic. Unemployed and grappling with the trauma of abuse and global crisis, I lacked coping mechanisms and plunged into a "freeze" trauma response. The lack of mental health support and financial means to secure an attorney left me paralyzed.

In 2021, after a year of not receiving any updates regarding the complaint, I moved, assuming the lawsuit had either been a scare tactic or dismissed. Shockingly, in the fall of 2022, I discovered my abuser had won a default judgment of nearly $90,000. Unbeknownst to me, summonses were sent to my old address, which was confirmed by the clerk’s office of the court it was filed through. While the cases my abuser had additionally filed against two other women were dismissed, my lack of legal representation left me vulnerable.

For over a year, I've sought affordable or pro-bono legal aid, hampered by the civil nature of the case. With no viable options, I appeal to the empathy of those who recognize the injustice of my situation. Over the past year, my abuser has relentlessly used the legal system to perpetuate harassment, taking me to court more than five times. Multiple vexatious litigations have ensued, with multiple instances of harassment against me documented by police officers.

I've tirelessly searched for justice, facing the financial, academic, and mental toll of missed work and university days. This relentless experience has left me feeling profoundly hopeless and isolated, fearing for my life. Imagine being sued for speaking your truth, now burdened with a debt you can never repay while living in poverty.

Still clinging to shreds of hope, I support myself financially, excel academically, and maintain a 4.0 GPA in my mental health field. I attend therapy weekly (and have for the past three years) determined to preserve my mental health, believing in a brighter future. My ultimate goal is to synthesize my education and lived experiences to clinically support others enduring similar traumas.

Desperate to end this nightmare, I seek funds to secure the legal representation I've needed since 2020. With your support, I aim to restore justice, heal, and move beyond years of perpetual torment inflicted by this individual. As an abuse victim, I cannot continue this fight alone, humbly asking for empathy and support from my community. Your assistance is profoundly appreciated.`

