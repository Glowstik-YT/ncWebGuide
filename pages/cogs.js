import { CopyBlock, monokaiSublime } from "react-code-blocks";
import styles from "../styles/Cogs.module.css";
import Head from "next/head"
import Navbar from "./navbar"
import CodeStyles from "../styles/CodeBlock.module.css";
import info from "../styles/Info.module.css";
import CreateWarning from "./warning";
import Link from "next/link"

const loadingCogs = `import os

for file in os.listdir("./cogs"): # List the contents of the directory called "cogs" which should be located in the same directory as this file.
    if file.endswith(".py"): # Make sure you don't load any files that aren't .py files.
        bot.load_extension(f"cogs.{file[:-3]}") # Load the cog but remove the .py from the end.
`;

const basicCog = `# This file should be inside of a folder. I recommend the name "cogs"

import nextcord #This is incase you want to create slash commands or embeds which will require the nextcord import
from nextcord.ext import commands # You'll need this for making the BasicCog class as all cogs must inherit from the commands.Cog class.

class BasicCog(commands.Cog): # You'll need to make a class that inherits from the commands.Cog class.
    def __init__(self, bot: commands.Bot): # The __init__ method must take in a bot argument. The type can be any bot class that inherits from the discord.Client class.
        self.bot = bot
    
    @commands.command(name="ping") # Creating a command goes FROM @bot.command TO @commands.command. They are the same thing just different names.
    async def ping(self, ctx: commands.Context): # Any command takes in a context argument.
        await ctx.send("Pong!") # Just sending "Pong" back, very basic command, you can change this to what you need.

    @commands.Cog.listener() # Now as you may think, @bot.event must turn into @commands.event, this is not correct. To listen for an event you should use @commands.Cog.listener()
    async def on_ready(self): # Just a basic on_ready event.
        print("Ready!")
    
def setup(bot: Commands.Bot): # All cogs file must have a setup method that takes in a bot argument, Nextcord will automatically call this function, supplying the bot argument.
    bot.add_cog(BasicCog(bot)) # Just initialize the BasicCog class inside of the bot.add_cog method. This will add the cog. You must also supply the bot argument that the class takes in.
`;

const disablingCogs = `@bot.command()
@commands.is_owner()
async def unload(ctx, extension):
    bot.unload_extension(f"cogs.{extension}")
    await ctx.send("Cog unloaded")
`

const enablingCogs = `@bot.command()
@commands.is_owner()
async def load(ctx, extension):
    bot.load_extension(f"cogs.{extension}")
    await ctx.send("Cog loaded")
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
                <h1>Cogs</h1>
                <p>Cogs are basically a way to store your commands and events in a neater manner. You can create a cog, and then create a command or event inside of it. There is no limit to how many you can make, although it isn't recommended to have 1000 commands or events in a single cog...</p>
                <div className={info.warnCard}>
                    <div>
                        <div className={info.warnTitle}>
                            <h2>
                                <strong>
                                    Events
                                </strong>
                            </h2>
                        </div>
                        <div className={info.warnContent}>
                            <p>
                            As you may know, there is a Message event which is omitted (triggered) every time a new message is sent. Now when you're <strong>not</strong> inside of a cog, then you would do something like <code className={CodeStyles.inline}>await bot.process_commands(message)</code>, but inside of a cog, this isn't needed.
                            </p>
                        </div>
                    </div>
                </div>
                <h3>Creating a cog</h3>
                <p>Creating a cog is very simple. It is sorta similar to how you would create commands and events inside of your <code className={CodeStyles.inline}>main.py</code>. You will also need a seprate file placed in a folder for the cog, for conistancy it is recommended to keep the cog name and the file name the same.</p>
                <div>
                    <CopyBlock
                    text={basicCog}
                    language='python'
                    showLineNumbers='true'
                    wrapLines
                    theme={monokaiSublime}
                    codeBlock='false'
                    />
                </div>

                <h3>Loading the cog</h3>
                <p>To load a cog, you should go to your <code className={CodeStyles.inline}>main.py</code> and then <code className={CodeStyles.inline}>import os</code>, then should then call the <code className={CodeStyles.inline}>listdir()</code> method on whatever you have called your cogs folder.</p>
                <div>
                    <CopyBlock
                    text={loadingCogs}
                    language='python'
                    showLineNumbers='true'
                    wrapLines
                    theme={monokaiSublime}
                    codeBlock='false'
                    />
                </div>
                <h3>Enabling/Disabling</h3>
                <p>There will be many times where you need to disable a set of commands, this is when you can disable the cog all together which will make the bot think that all of the commands in the cog, don't exist.</p>
                <div>
                <CreateWarning title="Expected Errors" content="If the cog you are trying to enable/disable does not exist (this also includes if its spelt wrong) or is already in that state, an error will be invoked, to prevent this you can add a try and except statement to catch the errors before hand." />
                <CopyBlock
                    text={disablingCogs}
                    language='python'
                    showLineNumbers='true'
                    wrapLines
                    theme={monokaiSublime}
                    codeBlock='false'
                />
                </div>
                <p>Its suggested to keep this in your <code className={CodeStyles.inline}>main.py</code> file so you can't disable your disable command...</p>
                <p>For enabling its pretty much the same thing, but instead of unloading the cog, we will be loading it!</p>
                <CopyBlock
                    text={disablingCogs}
                    language='python'
                    showLineNumbers='true'
                    wrapLines
                    theme={monokaiSublime}
                    codeBlock='false'
                />
                <div className={styles.buttonSwitch}>
                    <Link href="./events">
                        <button className={styles.nextButton}>
                            Error Handling
                        </button>
                    </Link>
                    <Link href="./events">
                        <button className={styles.backButton}>
                            Go Back
                        </button>
                    </Link>
                </div>
            </div>
            
        </div>
    )
}