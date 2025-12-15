import app from "./server.js";

const port = process.env.PORT || 5001;

app.listen(port, error => {
  if (error) throw error;
  console.log(`Server is running on port ${port}`);
});
