import styles from "../styles/Commands.module.css";
import Link from "next/link"
import NavBar from "./navbar";
import CodeStyles from "../styles/CodeBlock.module.css";
import { CopyBlock, monokaiSublime } from "react-code-blocks";
import React, { useState } from 'react';
import CreateTip from "./tips";
import CreateWarning from "./warning";
import Head from "next/head";
import Image from 'next/image'
import info from "../styles/Info.module.css";

const basicExampleCommand = `@bot.command()
async def example(ctx):
    await ctx.send("This is an example command")
`

const advancedExampleCommand = `@bot.command()
async def joined(ctx, member: nextcord.Member):
    await ctx.send(f"{member.name} joined in {member.joined_at}")
`

const exampleGroupCommand = `@bot.group(invoke_without_command=True)
async def help(ctx : commands.Context):
    await ctx.send("This is a help command")
`

const exampleModGroupCommand = `@help.command()
async def moderation(ctx : commands.Context):
    await ctx.send("This is the moderation part of a help command")
`

export default function Commands() {
    const [open, setOpen] = useState(true);
    return (
        <div>
            <Head>
                <title>The Unofficial Nextcord Web Guide</title>
                <meta
                name="description"
                content="The Unofficial Nextcord Web Guide is a collection of tutorials and guides for Nextcordv2"
                />
            </Head>
            <NavBar />
            <div className={styles.commandsCard}>
                <h1>Commands</h1>
                <p>
                    So you got your bot ready, nice, but now we need to add commands!
                    What are they you might ask, they're a way for users to interact with your with bot. Ever wanted a <code className={CodeStyles.inline}>!kill-everyone-in-existence-apart-from-me</code> command? Well here you can make that!
                </p>
                <CreateTip title="Decorators" content='Decorators have a special feature allowing us to enter args into them. The description and name args are very popular for decorators because they can be used in more complex help commands to let the user know more about the command.' />
                <h3>How?</h3>
                <p>
                    {/* Instead of saying "there is something called @bot.command()"", mention the commands extension - Glow*/}
                    {/* But we're not using the commands extension, unless that's what @bot.command uses idk */}
                    So in Nextcord, there is something called the commands extension which has something called <code className={CodeStyles.inline}>@bot.command()</code>,
                    its a decorator that lets the library know that the code below makes a command, below it we have to create an <code className={CodeStyles.inline}>async </code> function.
                    This function should take in at least one required parameter called <code className={CodeStyles.inline}>ctx:commands.Context</code> which is an instance of <Link href="https://nextcord.readthedocs.io/en/latest/ext/commands/api.html#nextcord.ext.commands.Context"><a className={styles.docLink} target="_blank"> <strong>Commands.context</strong></a></Link>
                    . After this you can add whatever <code className={CodeStyles.inline}>arguments</code> you want, followed by their <code className={CodeStyles.inline}>type</code>.
                    Inside of the function you can handle this however you would like.
                </p>
                <h3>Basic Example</h3>
                <div>
                    <CopyBlock
                    text={basicExampleCommand}
                    language='python'
                    showLineNumbers='true'
                    wrapLines
                    theme={monokaiSublime}
                    codeBlock='false'
                    />
                </div>
                <h3>Advanced Example</h3>
                <div>
                    <CopyBlock
                    text={advancedExampleCommand}
                    language='python'
                    showLineNumbers='true'
                    wrapLines
                    theme={monokaiSublime}
                    codeBlock='false'
                    />
                </div>
                <h3>Analyzing the Example</h3>
                <p>
                    In the advanced example above, the bot grabs the member argument and then references the Discord API to find the join date of that user, once the join date is found, the bot sends that message to the channel.
                </p>
                <h2>Command Groups</h2>
                <p>Sometimes you may have a command which has other commands branching out of it, for example, help commands are very common with this feature. <code className={CodeStyles.inline}>!help moderation</code> might be one of the commands you need for your bot, and the best way to do this is using command groups.</p>
                <div className={info.warnCard}>
                    <div>
                        <div className={info.warnTitle}>
                            <h2>
                                <strong>
                                    Help Command Removal
                                </strong>
                            </h2>
                        </div>
                        <div className={info.warnContent}>
                            <p>
                            When running this code, you may encounter a error message saying <code className={CodeStyles.inline}>The command help is already an existing command or alias.</code> This is because the help command is already a default command by nextcord command, and we can't have two commands with the same name. To fix this, we have to first remove the help command before we make our own. More on this in <Link href="./help-commands"><a className={styles.docLink}><strong>How to make Custom Help Commands</strong></a></Link>.
                            </p>
                            <CopyBlock
                                text='bot.remove_command("help")'
                                language='python'
                                showLineNumbers='true'
                                wrapLines
                                theme={monokaiSublime}
                                codeBlock='false'
                            />
                        </div>
                    </div>
                </div>
                <CopyBlock
                    text={exampleGroupCommand}
                    language='python'
                    showLineNumbers='true'
                    wrapLines
                    theme={monokaiSublime}
                    codeBlock='false'
                />
                <p>After you create a group command, you can then add on too the groups easily.</p>

                <CopyBlock
                    text={exampleModGroupCommand}
                    language='python'
                    showLineNumbers='true'
                    wrapLines
                    theme={monokaiSublime}
                    codeBlock='false'
                />
                <div>
                    <Image src="https://cdn.upload.systems/uploads/048IodDS.png" height="180" width="300"/>
                    <Image src="https://cdn.upload.systems/uploads/tqBWWVvw.png" height="180" width="350"/>
                </div>
                <p>This is a very simple command group/help command, you can use <Link href="./views"><a className={styles.docLink}><strong>Views</strong></a></Link> to make it more complext and better!</p>
                <p>A more complex help command which we will be making in <Link href="./help-commands"><a className={styles.docLink}><strong>How to make Custom Help Commands</strong></a></Link> would look something like this:</p>
                <Image src="https://cdn.upload.systems/uploads/OGsLF4yL.png" height="320" width="440"/ >
                <h2>Command Permissions</h2>
                <p>Many of the moderation commands if not all should check if the user has the correct permissions to run the command. If a user that just joined the server can ban people, that isnt the <em>greatest</em> look for your bot. Thats why we have <Link href="https://nextcord.readthedocs.io/en/latest/api.html#nextcord.Permissions"><a className={styles.docLink}><strong>Commands.permissions</strong></a></Link>, thats just one of the many permissions we will be working with today!</p>
                <h3>has_permissions</h3>
                <p>This is the most popular decorator for checking if a user has permissions, its very simple to use and is perfect for checking peoples permissions.</p>
                <div className={info.warnCard}>
                    <div>
                        <div className={info.warnTitle}>
                            <h2>
                                <strong>
                                    Possible Errors
                                </strong>
                            </h2>
                        </div>
                        <div className={info.warnContent}>
                            <p>
                                If a user who does not have sufficient permissions to run the command runs, the commands decorator will invoke an error. This error is <code className={CodeStyles.inline}>commands.MissingPermissions</code> which is inherited from <code className={CodeStyles.inline}>commands.CheckFailure</code>. In order to resolve this error you will require <Link href="./help-commands"><a className={styles.docLink}><strong>Error Handling.</strong></a></Link>
                            </p>
                        </div>
                    </div>
                </div>
                <CopyBlock
                    text={`@commands.has_permissions("manage_guild=True") 
#This accepts mutliple optional arguments`}
                    language='python'
                    showLineNumbers='true'
                    wrapLines
                    theme={monokaiSublime}
                    codeBlock='false'
                />
                <p>You would put this under your <code className={CodeStyles.inline}>@bot.command</code>.</p>
                <h3>has_guild_permissions</h3>
                <p>This is very similar to <code className={CodeStyles.inline}>has_permissions</code> although instead of checking permissions of the channel that the command is invoked, the bot instead checks the guid wide permissions of the user.</p>
                <CopyBlock
                    text={`@commands.has_guild_permissions("manage_messages=True") 
#This accepts mutliple optional arguments`}
                    language='python'
                    showLineNumbers='true'
                    wrapLines
                    theme={monokaiSublime}
                    codeBlock='false'
                />
                <p>You would put this under your <code className={CodeStyles.inline}>@bot.command</code>.</p>
                <h3>is_owner</h3>
                <p>This is mainly used for owner only commands, it's usually used for commands that impact the bot itself, for example if you want to restart the bot. If there are mutliple developers on your bot then it will apply to them all.</p>
                <CopyBlock
                    text={`@commands.is_owner()`}
                    language='python'
                    showLineNumbers='true'
                    wrapLines
                    theme={monokaiSublime}
                    codeBlock='false'
                />
                <p>The decorator takes in no arguments and is just <em>there</em>.</p>
                <h3>has_role</h3>
                <p>This decorator is very similar to <code className={CodeStyles.inline}>@has_permissions</code>, it takes in the argument of a role which can be entered in the form of an ID or Name.</p>
                <CopyBlock
                    text={`@commands.has_role("Admin")`}
                    language='python'
                    showLineNumbers='true'
                    wrapLines
                    theme={monokaiSublime}
                    codeBlock='false'
                />
                <p>Only if you have a role named Admin, will you be able to run the command.</p>
                <CreateWarning title="Possible Error" content="If you are planning on making a multi-server/public bot, it is suggested to just use the permissions decorator instead"/>
                <CopyBlock
                    text={`@commands.has_role(794743540675903528)`}
                    language='python'
                    showLineNumbers='true'
                    wrapLines
                    theme={monokaiSublime}
                    codeBlock='false'
                />
                <p>Using ID is more accurate (incase your change the role name) although, ID will only work for one server whilst Name might work with many servers</p>
                <h3>has_any_role</h3>
                <p>This decorator is very similar to <code className={CodeStyles.inline}>@has_role</code>, it takes in the argument of a role which can be entered in the form of an ID or Name, but this time it checks if the user has any of the roles specified.</p>
                <CopyBlock
                    text={`@commands.has_role(794743540675903528, 794743521864581150)
#This accepts mutliple optional arguments`}
                    language='python'
                    showLineNumbers='true'
                    wrapLines
                    theme={monokaiSublime}
                    codeBlock='false'
                />
                <p>You can use both ID and Name, just for demonstration I used ID for the example.</p>
                <div className={styles.buttonSwitch}>
                    <Link href="./events">
                        <button className={styles.nextButton}>
                            Nextcord Events
                        </button>
                    </Link>
                    <Link href="./getting-started">
                        <button className={styles.backButton}>
                            Go Back
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}