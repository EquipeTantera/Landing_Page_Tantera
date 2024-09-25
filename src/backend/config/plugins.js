module.exports = ({ env }) => ({
    settings: {
      cors: {
        origin: ["https://tantera-back.onrender.com"], 
        headers: ["Content-Type", "Authorization"],
      },
    },
  });
  