import { CopyBlock, monokaiSublime } from "react-code-blocks";
import styles from "../styles/SlashCommands.module.css"
import Navbar from "./navbar"


const basicSlashCommand = `from nextcord import Client, Interaction, SlashOption, ChannelType
from nextcord.abc import GuildChannel


# Replace the number here with the ID of your testing guild/server.
TESTING_GUILD_ID = 123456789


# While slash commands work with Bot from ext.commands, this is a basic slash example and thus, we use Client.
client = Client()


@client.event
async def on_ready():
    print("Slash template is up and running!")


# If you don't specify a list of guild_ids, it will be a global command. While global commands are available in every
# guild the bot is in (and has command permissions), they can take up to an hour before people will be able to use them.
# For testing commands, it's highly recommended to use guild_ids, as they are usable immediately.
@client.slash_command(guild_ids=[TESTING_GUILD_ID])
async def example1(interaction: Interaction):
    # This is an example of a very basic slash command.
    await interaction.response.send_message(
        "Output from the first example slash command!"
    )

` // Sourced from the examples folder from nextcord/nextcord

const basicSlashCommandWithArgs = `# Using the code from the last example, but with arguments.

@client.slash_command(
    name="example2",
    description="The second example command with parameters!",
    guild_ids=[TESTING_GUILD_ID],
)
async def example2_command(interaction: Interaction, arg1, arg2: int):
    # This command is a bit more complex, lets break it down:
    # 1: name= in the decorator sets the user-facing name of the command.
    # 2: description= sets the description that users will see for this command.
    # 3: arg1 was added, defaults to a string response.
    # 4: arg2 was added and typed as an int, meaning that users will only be able to give ints.
    await interaction.response.send_message(
        f"Second slash command, arg1: {arg1}, arg2: {arg2}"
    )
`

const basicSlashCommandWithSlashOptions = `# Using code from first example, but with SlashOptions.
@client.slash_command(
    name="example3",
    description="The third example command.",
    guild_ids=[TESTING_GUILD_ID],
)
async def example3_command(
    interaction: Interaction,
    arg1=SlashOption(name="input", description="give me text!"),
    arg2: bool = SlashOption(
        name="ephemeral",
        description="Make this message ephemeral or not.",
        required=False,
    ),
):
    # Introducing SlashOption, how you control individual parameters. Using them, you can provide a custom name and
    # description, and even set if they are required or not, just like with arg2/ephemeral here!
    if arg2:
        await interaction.response.send_message(
            f"Third slash command, arg1: {arg1}", ephemeral=True
        )
    else:
        await interaction.response.send_message(f"Third slash command, arg1: {arg1}")
`

const basicSlashCommandsWithSlashOptionsAndChoices = `# Using code from first example, but with SlashOptions and choices (I get to this in a second).
@client.slash_command(
    name="example4",
    description="The fourth example command with options!",
    guild_ids=[TESTING_GUILD_ID],
)
async def example4_command(
    interaction: Interaction,
    firstarg: int = SlashOption(
        name="number",
        choices={"1": 1, "2": 2, "3": 3, "4": 4, "5": 5},
        description="Choose a number between 1 and 5!",
    ),
    secondarg: GuildChannel = SlashOption(
        name="channel",
        channel_types=[ChannelType.text, ChannelType.public_thread],
        description="Choose a channel to mention!",
    ),
):
    # And finally, the more complicated uses of SlashOption: choices and channel_types. Choices are a static list of
    # values that the user has to choose between, and channel_types limits the kind of channels the user can select.
    await interaction.response.send_message(
        f"Fourth slash command! firstarg: {firstarg}, "
        f"secondarg: {secondarg.mention}"
    )

`

export default function slashCommands() {
    return (
        <div>
            <Navbar />
            <div className={styles.card}>
                <h1>Slash Commands</h1>
                <p>
                    Slash Commands! Discord's newest way for commands to be added to the bot. This is a very simple way to add commands to the bot, and it benefits off of the Discord Client's interface so you don't need to worry about people supply the wrong argument types, people using the wrong prefix, people using invalid commands, all because Discord handles that for you!
                    Now, you can't just magically create these commands, you need to use the <code>@bot.slash_command</code>. Let me show you.
                </p>
            </div>
            <div className={styles.card}>
                <CopyBlock
                    text={basicSlashCommand}
                    language='python'
                    showLineNumbers='true'
                    wrapLines
                    theme={monokaiSublime}
                    codeBlock='false'
                />
                <p>
                    This is a very basic slash command. It's very simple, and it's very easy to use.
                </p>
            </div>
            <div className={styles.card}>
                <CopyBlock
                    text={basicSlashCommandWithArgs}
                    language='python'
                    showLineNumbers='true'
                    wrapLines
                    theme={monokaiSublime}
                    codeBlock='false'
                />
            <p>
                This is a very basic slash command with arguments. It's very simple.
            </p>
            </div>
            <div className={styles.card}>
                <CopyBlock
                    text={basicSlashCommandWithSlashOptions}
                    language='python'
                    showLineNumbers='true'
                    wrapLines
                    theme={monokaiSublime}
                    codeBlock='false'
                />
                <p>
                    Now this is a little complex, but still quite simple to follow and expand on.
                </p>
            </div>
            <div className={styles.card}>
                <CopyBlock
                    text={basicSlashCommandsWithSlashOptionsAndChoices}
                    language='python'
                    showLineNumbers='true'
                    wrapLines
                    theme={monokaiSublime}
                    codeBlock='false'
                />
                <p>
                    This is a little more complex, but still quite simple to follow and expand on.
                </p>
            </div>
        </div>
    )
}