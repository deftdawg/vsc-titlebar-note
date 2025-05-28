# Window Objective Extension

This VS Code extension adds a status bar item to display and manage a workspace-specific objective. The objective is stored in the `.vscode/settings.json` file of your current workspace.

## Features

-   A status bar item on the left displays the current objective or "Set Objective".
-   Clicking the status bar item opens an input box to set or edit the objective.
-   The placeholder for the input box is "Objective for this VSC window".
-   The objective is saved to `windowObjective.text` in your workspace settings (`.vscode/settings.json`).
-   The objective is loaded from settings when the workspace is opened.
-   Handles empty input by clearing the objective and showing "Set Objective" in the status bar.

## Testing the Extension from Source

To test this extension from its source code, follow these steps:

1.  **Clone the Repository**:
    ```bash
    # Replace <repository-url> with the actual URL of this repository
    git clone <repository-url>
    cd window-objective 
    ```

2.  **Install Dependencies**:
    ```bash
    npm install
    ```

3.  **Open in VS Code**:
    ```bash
    code .
    ```

4.  **Run the Extension in Development Mode**:

    There are two main ways to do this:

    *   **Using the Command Line (Recommended for clarity)**:
        *   Make sure the extension has been compiled (see step 2, `npm install` should have handled `tsc`). If you need to recompile, you can often run `npm run compile`.
        *   In your terminal, from the root of the `window-objective` project, run the following command:
            ```bash
            code --extensionDevelopmentPath=\${PWD}
            ```
        *   This will open a new VS Code window (the "Extension Development Host") with the `window-objective` extension running.

    *   **Using F5 (If launch.json is configured)**:
        *   VS Code uses a `.vscode/launch.json` file to configure debugging and running tasks. If this project has a correctly configured `launch.json` for extension development (often created by default with `yo code`), pressing `F5` should automatically start the "Run Extension" task.
        *   If F5 presents options for Python or Node without an "Extension Host" or "Run Extension" option, it means `launch.json` might be missing or not configured for extension development. In this case, please use the command-line method above.

    This new window will have access to the extension as if it were installed.

5.  **Perform Manual Tests**:

    In the Extension Development Host window:

    *   **Initial Load (No Objective Set)**:
        *   Open a new VS Code window with a workspace folder (e.g., create an empty folder and open it within the Extension Development Host window).
        *   Does the "Set Objective" status bar item appear on the left?

    *   **Setting an Objective**:
        *   Click the "Set Objective" status bar item.
        *   Does an input box appear with the placeholder "Objective for this VSC window"?
        *   Enter an objective (e.g., "Refactor the main module").
        *   Press Enter or click away from the input box to submit.
        *   Does the status bar item update to show your new objective (e.g., "Refactor the main module")?
        *   Check the `.vscode/settings.json` file in the workspace you opened in the Extension Development Host window. Does it contain an entry like:
            ```json
            {
                "windowObjective.text": "Refactor the main module"
            }
            ```

    *   **Changing an Objective**:
        *   Click the status bar item (which now shows your current objective).
        *   Does the input box appear, pre-filled with your current objective?
        *   Enter a new objective (e.g., "Write unit tests").
        *   Submit it.
        *   Does the status bar item update to "Write unit tests"?
        *   Does `.vscode/settings.json` now reflect `"windowObjective.text": "Write unit tests"`?

    *   **Clearing an Objective**:
        *   Click the status bar item.
        *   Clear the text in the input box (make it empty).
        *   Submit it.
        *   Does the status bar item change back to "Set Objective"?
        *   Does `.vscode/settings.json` now reflect `"windowObjective.text": "" `?

    *   **Workspace Persistence**:
        *   With an objective set (e.g., "Write unit tests"), close the Extension Development Host window.
        *   Press `F5` again in the main VS Code window (where the extension source code is open) to start a new Extension Development Host window.
        *   Open the same workspace folder you used before.
        *   Does the status bar item correctly display "Write unit tests"?
        *   Clear the objective, close, and reopen the Extension Development Host (with the same workspace). Does it show "Set Objective"?

    *   **No Workspace Folder Open**:
        *   In the Extension Development Host window, close any open folder (File > Close Folder).
        *   How does the extension behave? Does the status bar item appear? If so, what happens when you click it and try to set an objective?

## Feedback

Please provide any feedback or report issues by <Specify how to report feedback - e.g., creating an issue in the repository>.

---
This README was generated by an AI agent.
