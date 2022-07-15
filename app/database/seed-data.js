db.notes.insertMany([
  { content: "HTML is easy", date: "2022-05-30T17:30:31.098Z", important: true },
  { content: "Browser can execute only Javascript", date: "2022-05-30T17:30:31.098Z", important: false },
  { content: "GET and POST are the most important methods of HTTP protocol", date: "2022-05-30T19:20:14.298Z", important: true }
])
db.users.insertMany([
  { username: "mluukkai", name: "Admin", passwordHash: "$2b$10$BxuSOmutPb80XK1U/wsnNemkXL.KRniMXNyaOSd5FT0/YwFg3nMgS" },
  { username: "hellas", passwordHash: "$2b$10$YDxowOH8mEZcPICZV4/GOe.c0PbCIG5Nilo1W/Wx.BXaY9sP/PXvS" }
])