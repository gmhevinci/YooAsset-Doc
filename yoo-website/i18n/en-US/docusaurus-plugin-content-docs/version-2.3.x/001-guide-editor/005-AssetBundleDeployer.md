# Resource Deployment

Learn about the rules for resource deployment.

After the resource patch package is successfully built, it needs to be transferred to the CDN server.

If it is for local testing, you can create a local web server and then copy the patch package to the web server.

### Deployment Directory

During the business development process, a SVN or GIT branch is created before releasing the version, and the branch project is used as the basis for building the app.

````
CDN
└─android
    ├─v1.0（APP版本）
    ├─v1.1（APP版本）
    └─v2.0（APP版本）
└─iphone
    ├─v1.0（APP版本）
    ├─v1.1（APP版本）
    └─v2.0（APP版本）
````

### App Version Explanation

v1.0 represents the app version, not the resource version. Without changing the installation package, there is no need to add a new app version directory.

For example, if the current app version of our game is v1.0, then all the generated patch files should be overwritten in the v1.0 directory.

In the example below, a total of 2 patch packages have been uploaded. The patch package uploaded the second time will overwrite the version record file (PackageManifest_DefaultPackage.version) from the first time. When we want to roll back the resource version, we just need to overwrite the version record file generated from the first time in the same directory.

````
v1.0（APP版本）
├─PackageManifest_DefaultPackage.version
├─PackageManifest_DefaultPackage_2023-02-01-654.hash
├─PackageManifest_DefaultPackage_2023-02-01-654.bytes
├─PackageManifest_DefaultPackage_2023-02-12-789.hash
├─PackageManifest_DefaultPackage_2023-02-12-789.bytes
├─2bb5a28d37dabf27df8bc6a4706b8f80.bundle
├─2dbea9c3056c8839bc03d80a2aebd105.bundle
├─6e8c3003a64ead36a0bd2d5cdebfbcf4.bundle
...
````
