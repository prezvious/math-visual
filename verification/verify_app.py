import os
from playwright.sync_api import sync_playwright

def verify_app():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Get absolute path to index.html
        cwd = os.getcwd()
        url = f"file://{cwd}/index.html"
        print(f"Navigating to {url}")

        page.goto(url)

        # Verify Title
        # Wait for title to be populated (JS might update it)
        page.wait_for_timeout(500)
        print(f"Page title: {page.title()}")

        # 1. Pascal Tab (Default)
        print("Checking Pascal Tab...")
        page.screenshot(path="verification/pascal_initial.png")

        # Change rows to 15
        print("Updating Pascal rows to 15...")
        # Note: input type range might be tricky to fill, usually needs JS or specific steps
        # But fill works on input[type=number], for range we can set value via JS
        page.evaluate("document.getElementById('pascalRows').value = 15")
        page.dispatch_event("#pascalRows", "input")
        page.wait_for_timeout(500)
        page.screenshot(path="verification/pascal_updated.png")

        # 2. Lattice Tab
        print("Checking Lattice Tab...")
        page.click("#tabLattice")
        page.wait_for_selector("#latticeGrid")

        # Change to 15x15 (number inputs)
        print("Updating Lattice to 15x15...")
        page.fill("#latticeX", "15")
        page.dispatch_event("#latticeX", "input")
        page.fill("#latticeY", "15")
        page.dispatch_event("#latticeY", "input")
        page.wait_for_timeout(1000) # Wait a bit longer for animation/render
        page.screenshot(path="verification/lattice_updated.png")

        # 3. Handshake Tab
        print("Checking Handshake Tab...")
        page.click("#tabHandshake")
        page.wait_for_selector("#handshakeCanvas")

        # Change to 20 people
        print("Updating Handshake to 20...")
        page.evaluate("document.getElementById('peopleCount').value = 20")
        page.dispatch_event("#peopleCount", "input")
        page.wait_for_timeout(500)
        page.screenshot(path="verification/handshake_updated.png")

        browser.close()
        print("Verification complete.")

if __name__ == "__main__":
    verify_app()
