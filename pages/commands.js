import styles from "../styles/Commands.module.css";
import Link from "next/link"
import NavBar from "./navbar";
import CodeStyles from "../styles/CodeBlock.module.css";
import { CopyBlock, monokaiSublime } from "react-code-blocks";
import React, { useState } from 'react';
import {Animated} from "react-animated-css";

const basicExampleCommand = `@bot.command()
async def example(ctx):
    await ctx.send("This is an example command")
`

const advancedExampleCommand = `@bot.command()
async def joined(ctx, member: nextcord.Member):
    await ctx.send(f"{member.name} joined in {member.joined_at}")
`

function CreateTip({title, content}){
    const [visible, setVisible] = useState(true);
  
    function hideMe(){
      setVisible(false);
    }

    return(
        
        <div>
            {visible && (
                <Animated animationIn="zoomIn" animationOut="zoomOut" isVisible={visible}>
                    <div className={styles.tipCard}>
                        <div>
                        <div className={styles.tipTitle}>
                            <h2>
                                <strong>
                                    {title}
                                </strong>
                            </h2>
                        </div>
                        <div className={styles.tipContent}>
                            <p>
                                {content}
                            </p>
                        </div>
                        <button className={styles.closeTipButton} onClick={hideMe}>Close Tip</button>
                        </div>
                    </div>
                </Animated>
            )}
        </div>
    )
} 
export default function Commands() {
    const [open, setOpen] = useState(true);
    return (
        <div>
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
                    So in Nextcord, there is something called <code className={CodeStyles.inline}>@bot.command()</code>, 
                    its a decorator that lets the library know that the code below makes a command, below it we have to create an <code className={CodeStyles.inline}>async </code> function.
                    This function should take in at least one required parameter called <code className={CodeStyles.inline}>ctx</code> which is an instance of <Link href="https://nextcord.readthedocs.io/en/latest/ext/commands/api.html#nextcord.ext.commands.Context"><a className={styles.docLink}> <strong>Commands.context</strong></a></Link>
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

            </div>
        </div>
    )
}

{/* <code>
    <code className={CodeStyles.import}>from</code> <code className={CodeStyles.importPackageName}>nextcord</code>.ext <code className={CodeStyles.import}>import </code><code className={CodeStyles.importPackageName}>commands</code>
</code> */}