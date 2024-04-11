Installation Guid of TypeScript
==================================

Intro: - TypeScript we use for development not for Production

1. If you want to install TypeScript firstly node should be installed in your system
2. For installing TypeScript just type in terminal "npm install -g typescript"
3. After Installing typescript to check it is installed or not just type "tsc --help"
4. If you get ERROR like File "C:\Users\litth\AppData\Roaming\npm\tsc.ps1 cannot be loaded because running scripts is disabled on this system. For more information, 
see about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170." this the run this command in PowerShell(Admin)
5. Get-ExecutionPolicy  ==== If the policy is set to Restricted, you'll need to change it. You can change it to RemoteSigned for example, which allows you to run scripts that you have written locally:
6. Set-ExecutionPolicy RemoteSigned
7. If your error is continue with this message === Set-ExecutionPolicy : Access to the registry key 'HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\PowerShell\1\ShellIds\Microsoft.PowerShell' is denied. To 
change the execution policy for the default (LocalMachine) scope, start Windows PowerShell with the "Run as administrator" option. To change the execution policy for the current user, run "Set-ExecutionPolicy -Scope CurrentUser".
8. It seems you need to run the Set-ExecutionPolicy command with administrator privileges. Here's an example of how to do that:
9. Open a new PowerShell window as an administrator. To do this, right-click on the Windows Start button and select "Windows PowerShell (Admin)". Run the following command to set the execution policy for the current user: --- 
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
10. This command sets the execution policy to RemoteSigned for the current user.
You may need to confirm the change by typing Y and pressing Enter.
11. If you need to change the execution policy for all users on the machine (LocalMachine scope), you can run the following command with administrator privileges: 
12. Set-ExecutionPolicy -Scope LocalMachine RemoteSigned
