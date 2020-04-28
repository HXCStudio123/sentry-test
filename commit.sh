# Assumes you're in a git repository
# export SENTRY_AUTH_TOKEN=c667d4a4f197407d91f351993a103e74642daaa7472440c79332a04ca8c2475c
# export SENTRY_ORG="sentry-test@1.0.0"
# VERSION=$(sentry-cli releases propose-version)

# # Create a release
# sentry-cli releases new -p project1 -p project2 $VERSION

# # Associate commits with the release
# sentry-cli releases set-commits --auto $VERSION
sentry-cli releases -o ftf-tb -p sentrytest files sentry-test@1.0.0 upload-sourcemaps --url-prefix ~/js ./dist/js --rewrite --log-level=info