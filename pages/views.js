import { CopyBlock, monokaiSublime } from "react-code-blocks";
import styles from "../styles/Views.module.css";
import Head from "next/head"
import Navbar from "./navbar"
import CodeStyles from "../styles/CodeBlock.module.css";
import info from "../styles/Info.module.css";
import CreateWarning from "./warning";
import Link from "next/link"
import ReactPlayer from "react-player";

const buttonsClassExample = `class ButtonsCheck(nextcord.ui.View): #the nextcord.ui.View is what we will use to create the buttons
    def __init__(self): #this is to initialize the class and set the properties
        super().__init__()
        self.value = None #here you can define as many varibles as you want to use in the class
`

const buttonsConfirmExample = `@nextcord.ui.button(label="Confirm", style=nextcord.ButtonStyle.green) #here we are creating a button which will say "Confirm" and the have the color green
async def confirm(self, button: nextcord.ui.Button, interaction: nextcord.Interaction):  #views use interaction and so we need to use that instead of ctx      
    if not interaction.user == self.ctx.author: #here we are checking if the user is the same as the author, if not then it will send a message to the user telling them they can not use the buttons
        return await interaction.response.send_message('Only the user who invoked the command can use the buttons', ephemeral=True)
    self.value = True #we set the button value to true so we can grab it later on and do things with it
    self.stop()
`

const buttonsCancelExample = `@nextcord.ui.button(label="Cancel", style=nextcord.ButtonStyle.red) #here we are creating a button which will say "Cancel" and the have the color red
async def cancel(self, button: nextcord.ui.Button, interaction: nextcord.Interaction):  #views use interaction and so we need to use that instead of ctx      
    if not interaction.user == self.ctx.author: #here we are checking if the user is the same as the author, if not then it will send a message to the user telling them they can not use the buttons
        return await interaction.response.send_message('Only the user who invoked the command can use the buttons', ephemeral=True)
    self.value = False #we set the button value to false so we can grab it later on and do things with it
    self.stop()
`

const commandDMExample = `@bot.command()
async def dm-me(ctx: commands.Context):
    await ctx.author.send('I have sent you a DM')
`

const commandDMButtonExample = `@bot.command()
async def dm-me(ctx: commands.Context):
    view = ButtonsCheck() #here we are creating a varible called view and setting it to the ButtonsCheck class
    await ctx.author.send('Are you sure you want me to dm you?', view=view) #we are adding another parameter to this send command, the view, which is the buttons class we created earlier
    await view.wait() #this will come in handy for the if statement we will be doing later
`

const commandDMButtonIfExample = `if view.value:
    try:
        await ctx.author.send('I have sent you a DM')
    except:
        return
else:
    return
`

const selectsClassExample = `class NumSelect(nextcord.ui.View): #the nextcord.ui.View is what we will use to create the selects
    def __init__(self): #this is to initialize the class and set the properties
        super().__init__()
`

const selectDecoratorExample = `@nextcord.ui.select(
    placeholder="Choose your help page",
    min_values=1,
    max_values=1,
    options=[
        nextcord.SelectOption(
            label="Option 1", description="This is the first option you can click", emoji="1️⃣"
        ),
        nextcord.SelectOption(
            label="Option 2", description="This is the second option you can click", emoji="2️⃣"
        ),
    ],
)
`

const selectFunctionExample = `async def num_callback(self, select, interaction: nextcord.Interaction):
    if interaction.user.id != self.user.id: #here we are checking if the user is the same as the author, if not then it will send a message to the user telling them they can not use the selects
        return await interaction.response.send_message('Only the user who invoked the command can use the selects', ephemeral=True)
    select.placeholder = f"{select.values[0]} Selected" #here we are changing the select placeholder to the number that was selected
    if select.values[0] == "Option 1":
        await interaction.response.send_message("You selected option 1", view=self) #here, when option 1 is selected, we are sending a message letting the user know that option 1 is selected
    if select.values[0] == "Option 2":
        await interaction.response.send_message("You selected option 2", view=self)
`

const selectCommandExample = `@bot.command()
async def number(ctx: commands.Context):
    view = NumSelect() #here we are creating a varible called view and setting it to the NumSelect class
    await ctx.send('Choose a number', view=view) #we are adding another parameter to this send command, the view, which is the selects class we created earlier
`

export default function Cogs() {
    return (
        <div>
            <Navbar />
            <Head>
                <title>The Unofficial Nextcord Web Guide</title>
                <meta
                name="description"
                content="The Unofficial Nextcord Web Guide is a collection of tutorials and guides for Nextcordv2"
                />
            </Head>
            <div className={styles.card}>
                <h1>Views</h1>
                <p>Views contain discords newer interactions such as buttons and selects, these can be used to do a variety of tasks from help commands to litteral games. This is a fairly new feature as it came out in Discord.py v2 Alpha, but it still works as expected and is super easy to use.</p>
                <h2>Buttons</h2>
                <p>Buttons are pretty easy to add if you know python pretty well. In order to create buttons we first have to create a buttons class to store them in. We will make a simple confirm buttons class to use incase you need the user needs to make a decision.</p>
                <CreateWarning title="Interaction Error" content="You may encounter an interaction error from discord whilst creating views, this can be resolved by simply restarting your bot and rerunning your command, if the error persists then it may be a problem with an incompatable library." />
                <CopyBlock
                    text={buttonsClassExample}
                    language='python'
                    showLineNumbers='true'
                    wrapLines
                    theme={monokaiSublime}
                    codeBlock='false'
                />
                <p>Thats all the code we need to create the class, now we can use nextcord decorators and create the buttons themselves.</p>
                <CopyBlock
                    text={buttonsConfirmExample}
                    language='python'
                    showLineNumbers='true'
                    wrapLines
                    theme={monokaiSublime}
                    codeBlock='false'
                />
                <p>Here is a confirm button, we put this inside the class to make it work... Cancel button is very similar and so we only have to change a couple things.</p>
                <CopyBlock
                    text={buttonsCancelExample}
                    language='python'
                    showLineNumbers='true'
                    wrapLines
                    theme={monokaiSublime}
                    codeBlock='false'
                />
                <p>Thats the buttons class done! Now in order to see the buttons we have to add it too a command. In order too do that, we first have to create a sample command and add the class too it as a varible, for demonstration pouposes I will create a command asking the bot to dm that user.</p>
                <CopyBlock
                    text={commandDMExample}
                    language='python'
                    showLineNumbers='true'
                    wrapLines
                    theme={monokaiSublime}
                    codeBlock='false'
                />
                <p>Now lets add buttons too the command!</p>
                <CopyBlock
                    text={commandDMButtonExample}
                    language='python'
                    showLineNumbers='true'
                    wrapLines
                    theme={monokaiSublime}
                    codeBlock='false'
                />
                <p>When we run the command it should look something like this:</p>
                {/* ADD IMAGE OFF CODE ABOVE HERE :D */}
                <p>Now lets add the if statements to check what button is clicked and what to do after it. This is where we use the <code className={CodeStyles.inline}>await view.wait()</code> to check if the button has timed out.</p>
                <CopyBlock
                    text={commandDMButtonIfExample}
                    language='python'
                    showLineNumbers='true'
                    wrapLines
                    theme={monokaiSublime}
                    codeBlock='false'
                />
                <p>Now we can run the command and see the buttons pop up!</p>
                <center>
                    <div>
                        <ReactPlayer url="https://www.youtube.com/watch?v=y3TqSUSOprs" />
                    </div>
                </center>
                <h2>Selects</h2>
                <p>Selects are like dropdown menus in discord, you are able to select something from the menu to do. They are like buttons but a bit simpilar to make and are good for lists. Creating selects is also pretty similar to buttons, we will create a selects class to house all of our select code in. Then we can call that select inside the command.</p>
                <CopyBlock
                    text={selectsClassExample}
                    language='python'
                    showLineNumbers='true'
                    wrapLines
                    theme={monokaiSublime}
                    codeBlock='false'
                />
                <p>Now that we have a selects class, we can now use the decorator and create the select. The decorator is where we will house all of the select options, and then under it we can create the function that will manage the selects.</p>
                <CopyBlock
                    text={selectDecoratorExample}
                    language='python'
                    showLineNumbers='true'
                    wrapLines
                    theme={monokaiSublime}
                    codeBlock='false'
                />
                <p>Now that the decorator is made we can now create the function which will send a message with whatever button is clicked, for example if the first select is clicked, then the number 1 will be sent in chat and vice versa.</p>
                <CopyBlock
                    text={selectFunctionExample}
                    language='python'
                    showLineNumbers='true'
                    wrapLines
                    theme={monokaiSublime}
                    codeBlock='false'
                />
                <p>This can be repeated as many times as there are needed and it is the same proccess everytime. Lastly we want to add it too the command which is pretty easy and the same as buttons.</p>
                <CopyBlock
                    text={selectCommandExample}
                    language='python'
                    showLineNumbers='true'
                    wrapLines
                    theme={monokaiSublime}
                    codeBlock='false'
                />
                <p></p>
                <center>
                    <div>
                        <ReactPlayer url="https://www.youtube.com/watch?v=VxPndtvB7AE" />
                    </div>
                </center>
                <p>And thats it! We just created buttons and selects!</p>
                <div className={styles.buttonSwitch}>
                    <Link href="./views">
                        <button className={styles.nextButton}>
                            Views
                        </button>
                    </Link>
                    <Link href="./cogs">
                        <button className={styles.backButton}>
                            Go Back
                        </button>
                    </Link>
                </div>
            </div>
            
        </div>
    )
}