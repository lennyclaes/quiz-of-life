# Quiz of life
A Kahoot-like quiz about me.

## Run it

### 1. Clone repository
```bash
git clone https://github.com/lennyclaes/quiz-of-life
```

### 2. Build front-end
This will run the build script. You can find the output in the dist/ folder.
```bash
cd quiz-of-life/client/
npm install
npm run build
```

### 3. Run the server
This will run an Express server on port 3000. It uses the dist/ folder you just created.
```bash
cd ../server/
npm install
npm run dev
```