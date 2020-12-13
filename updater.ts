const updateUrl = process.env.UPDATE_URL;
const timeout = process.env.TIMEOUT || 600;

if (!updateUrl) {
  console.error("No update URL found.");
  process.abort();
}

setTimeout(async () => {
  const res = await fetch(updateUrl);
  res.status !== 200
    ? console.error("Dyndns update failed!")
    : console.log("Dyndns updated successfully.");
}, timeout);
