import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "window-objective" is now active!');

  // Create a status bar item
  const statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);

  // Set the initial text and command
  statusBarItem.text = "Set Objective";
  statusBarItem.command = "windowObjective.setObjective";

  // Show the status bar item
  statusBarItem.show();

  // Add the status bar item to the subscriptions
  context.subscriptions.push(statusBarItem);

  // Register the command to set the objective
  let setObjectiveCommand = vscode.commands.registerCommand('windowObjective.setObjective', async () => {
    const objectiveText = await vscode.window.showInputBox({
      prompt: "Enter your objective",
      placeHolder: "Objective for this VSC window", // Updated placeholder
      value: (statusBarItem.text !== "Set Objective" && statusBarItem.text !== "") ? statusBarItem.text : "" // Pre-fill if not default or empty
    });

    if (objectiveText !== undefined) {
      const config = vscode.workspace.getConfiguration('windowObjective');
      await config.update('text', objectiveText || "", vscode.ConfigurationTarget.WorkspaceFolder);
      statusBarItem.text = objectiveText || "Set Objective"; // Show "Set Objective" if input is empty string
    }
  });

  context.subscriptions.push(setObjectiveCommand);

  // Load the stored objective on activation
  const config = vscode.workspace.getConfiguration('windowObjective');
  const storedObjective = config.get<string>('text');
  if (storedObjective) { // Check if not undefined or null
    statusBarItem.text = storedObjective;
  } else {
    statusBarItem.text = "Set Objective"; // Default if nothing stored or empty
  }
}

export function deactivate() {
  // This function is called when your extension is deactivated
}
