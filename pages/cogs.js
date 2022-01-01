import { CopyBlock, monokaiSublime } from "react-code-blocks";
import CreateWarning from "./warning";
import styles from "../styles/Cogs.module.css";
import Head from "next/head"
import Navbar from "./navbar"

export default function Cogs() {
    const loadingCogs = `import os
for file in os.listdir("./cogs"): # List the contents of the directory called "cogs" which should be located in the same directory as this file.
    if file.endswith(".py"): # Make sure you don't load any files that aren't .py files.
        bot.load_extension(f"cogs.{file[:-3]}") # Load the cog but remove the .py from the end.`;

    const basicCog = `# This file should be inside of a folder. I recommend the name "cogs"
    
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
    bot.add_cog(BasicCog(bot)) # Just initialize the BasicCog class inside of the bot.add_cog method. This will add the cog. You must also supply the bot argument that the class takes in.`
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
                <p>Cogs are basically a way to store your commands and events in a neater manner.</p>
                <p>You can create a cog, and then create a command or event inside of it.</p>
                <p>There is no limit to how many you can make, although it isn't recommended to have 1000 commands or events in a single cog...</p>
                <CreateWarning title="Events" content="As you may know, there is a Message event which is omitted (triggered) every time a new message is sent. Now when you're <strong>not</strong> inside of a cog, then you would do something like <code>await Bot.process_commands(Message)</code>, but inside of a cog, this isn't needed."/>                
            </div>
            <div className={styles.card}>
                <h2>Creating a cog</h2>
                <p>Creating a cog is very simple. It is sorta similar to how you would create commands and events inside of your <code>main.py</code></p>
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
            </div>
            <div className={styles.card}>
                <h2>Loading the cog</h2>
                <p>To load a cog, you should go to your main.py and then import os</p>
                <p>You should then call the <code>listdir()</code> method on whatever you have called your cogs folder.</p>
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
            </div>
        </div>
    )
}