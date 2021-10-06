# Developer Profile Micro Frontend Host

> This example project demonstrates a host application consuming two [rocket-science](https://github.com/SketchLagoon/rocket-science) applications using module federation and dynamic remote containers.

## How To Run

Clone all three applications onto your machine _(helpful to keep them in a common directory)_.

**Host app** [dev-profiles-host](https://github.com/ahoward2/dev-profiles-host)
**Remote app 1** [dev-profile-one](https://github.com/ahoward2/dev-profile-one)
**Remote app 2** [dev-profile-two](https://github.com/ahoward2/dev-profile-two)

All three are standalone applications in separate repositories. **Host app** uses [dynamic remote containers](https://webpack.js.org/concepts/module-federation/#dynamic-remote-containers) to consume federated modules from **Remote app 1** and **Remote app 2**.

```
# ----> /dev-profile-one

# To run federated server (port 3003)
$ yarn federate

# To run storybook and federated server together
$ yarn story
```

```
# ----> /dev-profile-two

# To run federated server (port 3001)
$ yarn federate

# To run storybook and federated server together
$ yarn story
```

```
# ----> /dev-profiles-host

# To start app
$ yarn start
```

Running storybook and the federated server together with `$ yarn story` allows you to develop the components locally within storybook while **Host app** can consume changes with a browser refresh.
