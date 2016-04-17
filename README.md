# RaspberrypiMonitoring
Original project:[sidwarkd][urlSidwark]
Youtube video: https://youtu.be/-oWhPa0slRM

PiMonitoring is a rapidly-developed knockoff of CommandPi, an iOS app for monitoring CPU usage, memory usage, internal temperature and control of the GPIO of your Raspberry Pi. It was created in realtime for [episode #16 of &micro;Casts][episode] and [episode #17 of &micro;Casts][episode2] and showcases how you can combine the Raspberry Pi, NodeJS, AngularJS, Socket IO, RPI-GPIO and Bootstrap to quickly create a project prototype.

## How to Use It

Once the repo is present you need to ensure you have NodeJS installed. You can test this by running:

```bash
node --version
```

If it is not installed I've found the easiest way to get it is by following the instructions found at http://revryl.com/2014/01/04/nodejs-raspberry-pi/.

With NodeJS and NPM installed you need to install the dependencies by running the following command from within the **pimonitor** folder:

```bash
npm install
```

This can take several minutes on the Pi depending on connection speed. Once finished you can start the PiMonitor server running on port 3000 with the command:

```bash
node bin/www
```

## Adding Features
If you want to enhance your monitor to report on more items like disk space or add more controls of GPIO or even external sensors you have a couple of options.

1. Add additional return data to the **update** function in pinode_stats.js
2. Create a new route in Express following the same pattern as the /stats route and call that route from the AngularJS code
3. Edit the file www which includes the conection and control of the GPIO


## Raspberry Pi Image
If you want to download the raspberry pi image where is all the configuration and the program, you can download in the next link: [imagePi]


## Raspberry Pi in server PHP
If you want to test the control of a Raspberry Pi in a PHP server, you should download the zip file and put the files inside of your Raspberry Pi Server (/var/www) . If you don't have it, you can install it with the command:

```bash
sudo apt-get install apache2 -y
```

For more information about how install the server: https://www.raspberrypi.org/documentation/remote-access/web-server/apache.md


[episode]: http://blog.microcasts.tv/2014/04/14/pi_express_bootstrap_angular/
[urlSidwark]: https://github.com/sidwarkd/pimonitor
[episode2]:http://www.microcasts.tv/episodes/2014/06/21/using-socket-io-to-control-the-raspberry-pi-remotely/
[imagePi]:https://mega.nz/#!hU0AzDQT!ds_ebK0bc7-4QEJ_lJLn2an6tg2Nw2tXPcvalo9GG4g 
