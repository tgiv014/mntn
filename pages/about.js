import Head from 'next/head'
import React from 'react'

export default () => (
    <div>
        <Head>
            <title>mntn.dev - About Me</title>
        </Head>
        <center>
            <img className="about-me" src="https://github.com/tgiv014.png" />
        </center>
        <h1>About Me</h1>
        <p>
            Hi, I'm Thomas. I'm an electronics engineer based in Kansas City. I graduated with a degree in Electrical Engineering (Comm. Systems and Design) from Kansas State in 2018. Since then, I've been an Electronics Design Engineer for the Marine Radar team at Garmin. I've worked on high-accuracy GPS receivers, low-power human interface devices, and FPGA-based radars. Before that, I was a Software Engineer intern in their Aviation and Marine segments.
    </p>
        <p>
            I'm experienced in digital electronics design with some basic RF design as well. Outside of schematic and PCB design, I write VHDL in the Xilinx Zynq Ultrascale ecosystem and pitch in on low-level RTOS and Linux Kernel work when I can.
    </p>
        <p>
            My preferred languages are C, Python, Verilog, VHDL, and Go. I'm working on becoming a Rustacean.
    </p>
        <p>
            Outside of the office, I love open source hardware, 3d printing, and embedded software. My current hobby project is building up a home server setup with Debian, ZFS, and Docker on a secondhand Dell R710.
    </p>
    </div>
)
