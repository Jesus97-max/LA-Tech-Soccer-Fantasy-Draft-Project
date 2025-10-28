### ⚙️ How to Run the Backend

1. **Open the backend folder**
# Ex: How to open the backend foler in the terminal

# jesusgomez@JesusCodes ~ % ls
# jesusgomez@JesusCodes Desktop % cd LA-Tech-Soccer-Fantasy-Draft-Project
# jesusgomez@JesusCodes LA-Tech-Soccer-Fantasy-Draft-Project % ls
backend			package-lock.json	README.md
# jesusgomez@JesusCodes LA-Tech-Soccer-Fantasy-Draft-Project % cd backend
# jesusgomez@JesusCodes backend % ls

2. # Now that you have opended the backend folder let's install the Dependencies 
# jesusgomez@JesusCodes backend % npm install

3. # Start the development server
# jesusgomez@JesusCodes backend % npm run dev

4. # Verify the server is running
# Open your browser (Chrome, Edge, Firefox, etc) and type this in the search bar:
# http://localhost:3000/health

5. # You should see:
# { "ok": true }

6. # 🧠 Common Fixes

# If npm install fails, make sure you’re inside the backend folder.

# If npm run dev doesn’t work, try:
# npx tsx watch src/index.ts