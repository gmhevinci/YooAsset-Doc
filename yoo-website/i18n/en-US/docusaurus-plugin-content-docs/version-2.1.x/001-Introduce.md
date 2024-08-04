# Introduction

[![License](https://img.shields.io/github/license/tuyoogame/YooAsset)](https://github.com/tuyoogame/YooAsset/blob/master/LICENSE)[![openupm](https://img.shields.io/npm/v/com.tuyoogame.yooasset?label=openupm&registry_uri=https://package.openupm.com)](https://openupm.cn/packages/com.tuyoogame.yooasset/)

**YooAsset** is a resource management system for Unity3D that helps development teams deploy and deliver games quickly.

It can meet various requirements for commercial games and has been validated by multiple million DAU game products.

## Introduction

YooAsset can meet any of the following requirements:

- I want to release an installation package that does not contain any game resources, and players can download them while playing.
- I want to release an installation package that guarantees the initial experience, and players can choose to download level content themselves.
- I want to release an installation package with a maximum size of 300MB, and download the remaining content before entering the game.
- I want to release an installation package for a single-player game that supports normal updates when the network is available, and allows playing the old version when there is no network.
- I want to release a MOD game installation package, where players can upload their own MOD content to the server and other players can download and play it.
- We are working on a large-scale project with hundreds of GBs of resources. It takes a lot of time to build each time. Can we split the project and build it separately?

## System Features

- **Seamless Switching of Build Pipelines**

  Supports both traditional built-in build pipelines and Scriptable Build Pipelines (SBP).

- **Support for Distributed Builds**

  Supports splitting the project into multiple builds and building content separately, making it easy to support game mods.

- **Support for Addressable Asset System**

  Supports locating resources by their full paths by default, and also supports addressable asset system, allowing efficient configuration of addressable paths without cumbersome processes.

- **Secure and Efficient Asset Bundling Solution**

  Based on resource labels, automatically categorizes dependent asset bundles, avoiding manual maintenance costs. It can easily achieve zero-resource installation packages or full-resource installation packages.

- **Powerful and Flexible Packaging System**

  Allows custom packaging strategies, automatically analyzes dependencies to achieve zero redundancy of resources, and uses a resource object-based asset bundle dependency management solution, naturally avoiding circular dependencies between asset bundles.

- **Based on Reference Counting**

  Based on reference counting management, helps us implement a safe resource unloading strategy, better memory management, and avoids redundant resource objects. It also provides a powerful analyzer to help discover potential resource leakage issues.

- **Multiple Modes for Free Switching**

  Editor simulation mode, standalone mode, online mode. In editor simulation mode, you can simulate the real environment without building asset bundles. Without modifying any code, you can freely switch to other modes.

- **Powerful and Secure Loading System**

  - **Asynchronous Loading** Supports multiple asynchronous loading methods such as coroutines, Tasks, and delegates.
  - **Synchronous Loading** Supports a mix of synchronous and asynchronous loading.
  - **Play While Downloading** When loading a resource object, if the resource bundle it depends on does not exist locally, it will automatically download it from the server and then load the resource object.
  - **Multi-threaded Downloading** Supports resumable downloads, automatically verifies downloaded files, and automatically repairs corrupted files.
  - **Versatile Downloader** Can create downloaders based on resource category tags or resource objects. You can set limits on the number of files downloaded simultaneously, the number of download retries for failed downloads, and the download timeout. Multiple downloaders can download simultaneously without worrying about duplicate downloads. The downloader also provides common interfaces such as download progress and download failure.

- **Native File Format Management**

  Seamlessly integrates with the resource packaging system, making it easy to manage and download native files.

- **Flexible and Versatile Version Management**

  Supports quick rollback of online versions, distinguishes between review versions, test versions, and online versions, and supports gray updates and testing.
