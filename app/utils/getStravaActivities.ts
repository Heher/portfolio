export const getStravaActivities = async () => {
  const response = await fetch('https://www.strava.com/oauth/token', {
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
      client_id: process.env.STRAVA_CLIENT_ID,
      client_secret: process.env.STRAVA_CLIENT_SECRET,
      refresh_token: '64fef524f436535bccfff4bc2906cd9819e5c11a',
      grant_type: 'refresh_token'
    })
  });

  const json = await response.json();

  const activitiesResponse = await fetch(
    `https://www.strava.com/api/v3/activities/8460254421?access_token=${json.access_token}`
  );

  const activitiesJson = await activitiesResponse.json();
  // console.log(activitiesJson);

  return activitiesJson;
};
