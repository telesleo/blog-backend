import 'dotenv/config';
import app from './app';

const PORT = process.env.API_PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
