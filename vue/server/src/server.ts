import http from "http";
import dotenv from "dotenv";
import axios from "axios";
dotenv.config();

const host = "localhost";
const port = 8000;

const NOTION_ACCESS_KEY = process.env.NOTION_ACCESS_KEY;
const NOTION_DB_ID = process.env.NOTION_DB_ID;

const server = http.createServer(async (req, res) => {
  // Avoid CORS errors
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");
  switch (req.url) {
    // Will respond to queries to the domain root (like http://localhost/)
    case "/":
      res.writeHead(200);
      res.end(JSON.stringify({ data: "success" }));
      break;
    case "/notion/database/read":
      axios
        .post(
          `https://api.notion.com/v1/databases/${NOTION_DB_ID}/query`,
          {},
          {
            headers: {
              Authorization: `Bearer ${NOTION_ACCESS_KEY}`,
              "Notion-Version": "2022-02-22",
            },
          }
        )
        .then((result: any) => {
          const contents = result.data.results;
          res.writeHead(200);
          res.end(JSON.stringify({ data: contents }));
        });
      break;
    case "/notion/database/write":
      const buffers = [];
      for await (const chunk of req) {
        buffers.push(chunk);
      }
      const data = JSON.parse(Buffer.concat(buffers).toString());
      axios
        .post(
          `https://api.notion.com/v1/pages`,
          {
            parent: {
              type: "database_id",
              database_id: "312a8185681843a2a6d0fad4d03d9b59",
            },
            properties: {
              id: {
                title: [
                  {
                    text: {
                      content: data.id,
                    },
                  },
                ],
              },
              mood: {
                rich_text: [
                  {
                    text: {
                      content: data.mood,
                    },
                  },
                ],
              },
              sleep: {
                rich_text: [
                  {
                    text: {
                      content: data.sleep,
                    },
                  },
                ],
              },
            },
          },
          {
            headers: {
              Authorization: `Bearer ${NOTION_ACCESS_KEY}`,
              "Notion-Version": "2022-02-22",
            },
          }
        )
        .then((result: any) => {
          const contents = result.data.results;
          res.writeHead(200);
          res.end(JSON.stringify({ data: contents }));
        });
      break;
    default:
      res.writeHead(404);
      res.end(JSON.stringify({ error: "Resource not found" }));
  }
});

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
