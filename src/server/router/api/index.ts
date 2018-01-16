import express from 'express';

const GEOCODES = [
  {
    address: '29 Rue du 4 Septembre',
    latitude: 48.86982,
    longitude: 2.334579
  },
  {
    address: '15 Rue de Bourgogne',
    latitude: 48.8590453,
    longitude: 2.3180404
  }
];

const router = express.Router();

const createError = (status, code, message) => {
  const error: any = new Error(message);
  error.code = code;
  error.status = status;

  return error;
};

const geocodeAddress = address => {
  const geocode = GEOCODES.find(g => {
    return address.toLowerCase().indexOf(g.address.toLowerCase()) >= 0;
  });

  if (!geocode) {
    throw createError(400, 'GEOCODE_ERROR', `"${address}" cannot be geocoded.`);
  }

  return geocode;
};

router.post('/geocode', (req, res) => {
  const geocode = geocodeAddress(req.body.address || '');

  res.json(geocode);
});

router.post('/jobs', (req, res) => {
  const { pickup, dropoff } = req.body;

  if (!pickup || !dropoff) {
    throw createError(400, 'JOB_ERROR', `"pickup" and "dropoff" are required`);
  }

  const job = {
    pickup: geocodeAddress(pickup || ''),
    dropoff: geocodeAddress(dropoff || '')
  };

  res.json(job);
});

router.use((err, req, res, next) => {
  if (err.code && err.status) {
    res.status(err.status).json({
      code: err.code,
      message: err.message
    });
  } else {
    res.status(500).json({ code: 'FATAL' });
  }
});

export default router;
